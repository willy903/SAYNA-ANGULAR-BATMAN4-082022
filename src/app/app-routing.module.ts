import { SingleProductsComponent } from './components/single-products/single-products.component';
import { CartComponent } from './components/cart/cart.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GameComponent } from './components/game/game.component';
import { EshopComponent } from './components/eshop/eshop.component';
import { MonCompteComponent } from './components/mon-compte/mon-compte.component';

const routes: Routes = [
  { path: '',redirectTo:"/home",pathMatch:"full"},
  { path: 'home', component: HomeComponent},
  { path: 'game', component: GameComponent},
  { path: 'eshop', component: EshopComponent},
  { path: 'moncompte', component: MonCompteComponent },
  { path: 'Cart', component: CartComponent },
  { path: 'eshop/product/:id', component:SingleProductsComponent},
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }