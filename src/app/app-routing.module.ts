import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListProductComponent } from './products/list-product/list-product.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';


const ROUTES: Routes = [
  {path:'',component: HomeComponent}, 
  {path:'index',redirectTo:'home', pathMatch:'full'},
  {path:'home',component: HomeComponent},
  {path:'contact',component: ContactComponent},
  { path: 'product', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: 'user', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  {path:'**',component: NotfoundComponent}, //we put this last !!
]
@NgModule({
  
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }