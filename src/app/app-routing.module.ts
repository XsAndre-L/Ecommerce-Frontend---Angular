import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { CheckOutSuccessPageComponent } from './components/check-out-success-page/check-out-success-page.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { LoginComponent } from './components/login/login.component';
import { OrdersComponent } from './components/orders/orders.component';
import { SignupComponent } from './components/signup/signup.component';
import { StoreComponent } from './components/store/store.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const routes: Routes = [
  { path: '', component: StoreComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'user', component: UserDetailsComponent },
  { path: 'item-details/:id', component: ItemDetailsComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'cart', component: CartPageComponent },
  { path: 'checkout', component: CheckOutSuccessPageComponent },
  { path: '**', redirectTo: '/' },

  // { path: 'login', component: LoginComponent },
  // { path: 'signup', component: SignupComponent },
  // { path: 'user', component: UserDetailsComponent },
  // { path: 'item-details/:id', component: ItemDetailsComponent },
  // { path: 'orders', component: OrdersComponent },
  // { path: 'cart', component: CartPageComponent },
  // { path: 'checkout', component: CheckOutSuccessPageComponent },

  // LAZY LOADING MODULES
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('./components/store/store.component').then(
  //       (m) => m.StoreComponent
  //     ),
  // },
  // {
  //   path: 'login',
  //   loadChildren: () =>
  //     import('./components/login/login.component').then(
  //       (m) => m.LoginComponent
  //     ),
  // },
  // {
  //   path: 'signup',
  //   loadChildren: () =>
  //     import('./components/signup/signup.component').then(
  //       (m) => m.SignupComponent
  //     ),
  // },
  // {
  //   path: 'user',
  //   loadChildren: () =>
  //     import('./components/user-details/user-details.component').then(
  //       (m) => m.UserDetailsComponent
  //     ),
  // },
  // {
  //   path: 'item-details/:id',
  //   loadChildren: () =>
  //     import('./components/item-details/item-details.component').then(
  //       (m) => m.ItemDetailsComponent
  //     ),
  // },
  // {
  //   path: 'orders',
  //   loadChildren: () =>
  //     import('./components/orders/orders.component').then(
  //       (m) => m.OrdersComponent
  //     ),
  // },
  // {
  //   path: 'cart',
  //   loadChildren: () =>
  //     import('./components/cart-page/cart-page.component').then(
  //       (m) => m.CartPageComponent
  //     ),
  // },
  // {
  //   path: 'checkout',
  //   loadChildren: () =>
  //     import(
  //       './components/check-out-success-page/check-out-success-page.component'
  //     ).then((m) => m.CheckOutSuccessPageComponent),
  // },

  // { path: '**', redirectTo: '/' },

  // {path: 'auth', loadChildren: () => (await import('auth/auth.module')).AuthModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
