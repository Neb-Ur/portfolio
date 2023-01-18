import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SellerComponent } from './store/seller/seller.component';
import { BuyerComponent } from './store/buyer/buyer.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'seller',
    component: SellerComponent,
  },
  {
    path: 'buyer',
    component: BuyerComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
