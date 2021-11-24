import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FuelComponent } from './fuel/fuel.component';
import { FoodComponent } from './food/food.component';
import { FunComponent } from './fun/fun.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
	{ path: 'fuel', component: FuelComponent },
	{ path: 'food', component: FoodComponent },
  { path: 'fun', component: FunComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    FuelComponent,
    FoodComponent,
    FunComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


