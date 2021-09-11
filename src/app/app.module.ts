import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { CalculoComponent } from './calculo/calculo.component';
import { FormsModule } from '@angular/forms';
import { NgifComponent } from './ngif/ngif.component';
import { DiretivangforComponent } from './diretivangfor/diretivangfor.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    CalculoComponent,
    NgifComponent,
    DiretivangforComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
