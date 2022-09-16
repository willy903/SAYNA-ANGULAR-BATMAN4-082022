import { NgModule, LOCALE_ID } from '@angular/core';
import * as fr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { GameComponent } from './components/game/game.component';
import { EshopComponent } from './components/eshop/eshop.component';
import { MonCompteComponent } from './components/mon-compte/mon-compte.component';
import { BarNavComponent } from './components/bar-nav/bar-nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { AsideRightComponent } from './components/aside-right/aside-right.component';
import { CartComponent } from './components/cart/cart.component';
import { AsideComponent } from './components/aside/aside.component';
import { ProductsComponent } from './components/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent,
    EshopComponent,
    MonCompteComponent,
    BarNavComponent,
    FooterComponent,
    PagenotfoundComponent,
    AsideRightComponent,
    CartComponent,
    AsideComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'fr-FR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    registerLocaleData(fr.default);
  }
}

