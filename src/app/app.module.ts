import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FuelComponent } from './fuel/fuel.component';
import { FoodComponent } from './food/food.component';
import { FunComponent } from './fun/fun.component';
import { Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ModalComponent } from './modal/modal.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
	{ path: 'fuel', component: FuelComponent },
	{ path: 'food', component: FoodComponent },
  { path: 'fun', component: FunComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    FuelComponent,
    FoodComponent,
    FunComponent,
    NavbarComponent,
    HomeComponent,
    ModalComponent
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


