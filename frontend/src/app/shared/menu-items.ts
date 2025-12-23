import { Injectable } from "@angular/core";
export interface Menu{
    state: string,
    name : string,
    icons : string,
    role: string
}

const MENUITEMS =[
    { state : 'dashboard', name : 'Dashboard', icons: 'dashboard', role:''},
    { state : 'stock', name : 'Stock', icons: 'Stock', role:''}
]

@Injectable()
export class MenuItems {
    getMenuItems():Menu[]{
        return MENUITEMS;
    }
}