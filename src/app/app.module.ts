import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { LineComponent } from './line/line.component';
import { CardComponent } from './card/card.component';
import { NavbarComponent } from './layout/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    LineComponent,
    CardComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }