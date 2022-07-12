import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { StoreComponent } from './components/store/store.component';
import { OrdersComponent } from './components/orders/orders.component';
import { CartComponent } from './components/cart/cart.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { NavComponent } from './components/nav/nav.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ButtonComponent } from './components/primitives/button/button.component';
import { InputFieldComponent } from './components/primitives/input-field/input-field.component';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { StoreNavComponent } from './components/store/store-nav/store-nav.component';
import { StoreSideBarComponent } from './components/store/store-side-bar/store-side-bar.component';
import { ProductCardComponent } from './components/store/product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    StoreComponent,
    OrdersComponent,
    CartComponent,
    ItemDetailsComponent,
    NavComponent,
    UserDetailsComponent,
    ButtonComponent,
    InputFieldComponent,
    CartItemComponent,
    CartPageComponent,
    FooterComponent,
    StoreNavComponent,
    StoreSideBarComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
