import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit{
    //De constructor is eerder klaar dan angular geladen is, dus alles in angular doe je in de ngOnInit. ngOnInit is deel van de Angular lifecycle

  constructor(){}
    ngOnInit():void{

    }
}
