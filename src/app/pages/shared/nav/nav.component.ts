import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent implements OnInit{
    //De constructor is eerder klaar dan angular geladen is, dus alles in angular doe je in de ngOnInit. ngOnInit is deel van de Angular lifecycle

  constructor(){}
    ngOnInit():void{

    }
}
