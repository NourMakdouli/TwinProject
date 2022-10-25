import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/model/product';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {
  list:Product[];

  constructor(private ServiceProduct:ProductService) { }

  ngOnInit(): void {
    this.list=this.ServiceProduct.all.filter(product=>product.quantity==0);
  }
  deleteProduct(p:Product){
    let i=this.list.indexOf(p);
    this.list.splice(i,1);
  }

}
