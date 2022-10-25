import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { FormProductComponent } from './form-product/form-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { FormsModule } from '@angular/forms';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { AdminProductComponent } from './admin-product/admin-product.component';


@NgModule({
  declarations: [
    ProductsComponent,
    FormProductComponent, 
    ListProductComponent, 
    DetailProductComponent, AdminProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule
  ]
})
export class ProductsModule { }
