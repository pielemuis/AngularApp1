import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit{
    //De constructor is eerder klaar dan angular geladen is, dus alles in angular doe je in de ngOnInit. ngOnInit is deel van de Angular lifecycle

  constructor(){}
    ngOnInit():void{

    }
}
