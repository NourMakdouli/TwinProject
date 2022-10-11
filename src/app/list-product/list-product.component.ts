import { Component, OnInit } from '@angular/core';

import { Product } from '../model/product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  public title: String;
  public priceMax:number;
  public list:Product[];
  constructor() {
  }
  ngOnInit(): void {
    this.title = 'MyStore App'
    this.list = [ 
      {
        id: 12,
        name: 'nice shirt',
        price: 100,
        quantity: 2,
        nbrLike: 10,
        picture: 'https://assets.laboutiqueofficielle.com/w_1100,q_auto,f_auto/media/products/2019/01/21/guess_167976_M92I39I3Z00_TWHT_20190123T142928_01.jpg',
        description: 'beautiful',
      },
      {
        id: 10,

        name: 'awsome t-shirt',
        price: 120,
        quantity: 0,
        nbrLike: 5,
        picture: 'https://www.clubjj.co.uk/images/products/1558964289-18712000.jpg',
        description: 'amazing',
      },
    ]
  }
  incrementLike(product:Product):void {
    let i = this.list.indexOf(product); 
    if(i!=-1){
      this.list[i].nbrLike++
    }
  }
    buyProduct(product:Product):void {
      let i = this.list.indexOf(product); 
      if(i!=-1){
        this.list[i].quantity--
      }
    }

}