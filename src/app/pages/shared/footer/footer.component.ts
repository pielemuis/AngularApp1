import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit{
    //De constructor is eerder klaar dan angular geladen is, dus alles in angular doe je in de ngOnInit. ngOnInit is deel van de Angular lifecycle

  constructor(){}
    ngOnInit():void{

    }
}
