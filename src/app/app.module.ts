import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { ProductsHomeComponent } from './Components/products-home/products-home.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { OrderComponent } from './Components/order/order.component';
import { MyOrdersComponent } from './Components/my-orders/my-orders.component';
import { CancelOrderComponent } from './Components/cancel-order/cancel-order.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { MainComponent } from './Components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    ProductsHomeComponent,
    ProfileComponent,
    OrderComponent,
    MyOrdersComponent,
    CancelOrderComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
