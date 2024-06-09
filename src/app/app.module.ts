import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './_Components/login/login.component';
import { RegistrationComponent } from './_Components/registration/registration.component';
import { LoginsuccessComponent } from './_Components/loginsuccess/loginsuccess.component';
import { HomeComponent } from './_Components/home/home.component';
import { NavbarComponent } from './_Components/navbar/navbar.component';
import { ProductsComponent } from './_Components/products/products.component';
import { SunglassesListComponent } from './_Components/sunglasses-list/sunglasses-list.component';
import { CreateSunglassesComponent } from './_Components/create-sunglasses/create-sunglasses.component';
import { ProductComponent } from './_Components/product/product.component';
import { CreateFrameComponent } from './_Components/create-frame/create-frame.component';
import { FrameListComponent } from './_Components/frame-list/frame-list.component';

import { GlassesListComponent } from './_Components/glasses-list/glasses-list.component';
import { CreateGlassesComponent } from './_Components/create-glasses/create-glasses.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    LoginsuccessComponent,
    HomeComponent,
    NavbarComponent,
    ProductsComponent,
    SunglassesListComponent,
    CreateSunglassesComponent,
    ProductComponent,
    CreateFrameComponent,
    FrameListComponent,
    CreateGlassesComponent,
    GlassesListComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
