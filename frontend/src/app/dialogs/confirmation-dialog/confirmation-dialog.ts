import { Component, EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogActions } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  imports: [MatDialogModule, MatDialogActions],
  templateUrl: './confirmation-dialog.html',
  styleUrl: './confirmation-dialog.scss',
})
export class ConfirmationDialog {
  onEmitStatusChange = new EventEmitter();
  details:any ={}

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData:any){}

  ngOnInit():void{
    if(this.dialogData){
      this.details = this.dialogData
    }
  }
  handleSubmit(){
    this.onEmitStatusChange.emit()
  }
}


