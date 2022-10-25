import { Product } from '../../core/model/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StatsService } from 'src/app/core/services/stats.service';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  public title: String;
  public list:Product[];
  public all:Product[];

  public priceMax:number;
  public category: String;
  public stock:Number; 
  constructor(private productService: ProductService,
    private route:ActivatedRoute, private statsService:StatsService) {
  }
  ngOnInit(): void {
    this.title = 'MyStore App';
    console.log(this.route.params);
    this.all=this.productService.all;
    this.category= this.route.snapshot.params['category'];


    
      //filter
      this.route.params.subscribe(
        // 9a3din nkhadmou fi les fitres w ba3ed erreur w ba3ed complete alakahter fi subscirbe andou 3 
        (params)=>{
          this.category=params['category'];
          if(this.category!=null){
            this.list= this.all.filter((product)=>product.category==this.category)
          }
          else (this.list=this.all)
        },
        ()=>{console.log("error")},
        ()=>{console.log("complete")}
          ) 



      
     

  }


  incrementLike(product:Product):void{
    let i = this.list.indexOf(product);
    if(i!=-1){
      this.list[i].nbrLike++
      //cnx to  backend side
    }
  }
  buyProduct(product:Product):void{
    let i = this.list.indexOf(product);
    if(i!=-1){
      this.list[i].quantity--
      //cnx to  backend side
    }}

  outOfStock (){
   this.stock=this.statsService.getCount(this.all,"quantity", 0)
  }
}