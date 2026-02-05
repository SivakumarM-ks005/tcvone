import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription, interval } from 'rxjs';import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
 'rxjs'
import { throttle } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class IdleService {
  private idleSubject = new Subject<boolean>();
  private timeout = 10; // seconds
  private lastActivity? : Date;
  private idleCheckInterval = 10; //seconds
  private idleSubscription? : Subscription;

  constructor(){
    this.resetTimer();
    this.startWatching();
  }
  get idleState(): Observable<boolean>{
    return this.idleSubject.asObservable();
  }
  private startWatching(){
     this.idleSubscription = interval(this.idleCheckInterval * 1000)
     .pipe(throttle(()=> interval(100000)))
     .subscribe(()=>{
      const now = new Date();
      if(now.getTime() - this.lastActivity?.getTime() !> this.timeout * 1000){
       this.idleSubject.next(true);
      }
      
     })   
    }

  resetTimer(){
    this.lastActivity = new Date();
    this.idleSubject.next(false);
  }
  
  stopWatching(){
    if(this.idleSubscription){
      this.idleSubscription.unsubscribe();
    }
  }
}
