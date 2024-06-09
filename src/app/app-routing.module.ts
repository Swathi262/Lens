import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFrameComponent } from './_Components/create-frame/create-frame.component';
import { CreateGlassesComponent } from './_Components/create-glasses/create-glasses.component';
import { CreateSunglassesComponent } from './_Components/create-sunglasses/create-sunglasses.component';
import { FrameListComponent } from './_Components/frame-list/frame-list.component';
import { GlassesListComponent } from './_Components/glasses-list/glasses-list.component';
import { HomeComponent } from './_Components/home/home.component';
import { LoginComponent } from './_Components/login/login.component';
import { LoginsuccessComponent } from './_Components/loginsuccess/loginsuccess.component';
import { NavbarComponent } from './_Components/navbar/navbar.component';
import { ProductComponent } from './_Components/product/product.component';
import { ProductsComponent } from './_Components/products/products.component';
import { RegistrationComponent } from './_Components/registration/registration.component';
import { SunglassesListComponent } from './_Components/sunglasses-list/sunglasses-list.component';

const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'loginsuccess',component:LoginsuccessComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
   {path:'navbar',component:NavbarComponent},
   {path:'product',component:ProductsComponent},
   {path:'sunglasses',component:SunglassesListComponent},
   {path: 'create-sunglasses', component: CreateSunglassesComponent},
   {path: 'products',component:ProductComponent},
   {path: 'frame',component:FrameListComponent},
   {path: 'create-frame',component:CreateFrameComponent},
   {path: 'glasses',component:GlassesListComponent},
   {path: 'create-glasses',component:CreateGlassesComponent},
  
   


  //  {path: '', redirectTo: 'Sunglasses', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
