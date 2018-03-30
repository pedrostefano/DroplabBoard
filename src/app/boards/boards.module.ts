import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { BoardComponent } from './board/board.component';
import { LineComponent } from './line/line.component';
import { CardComponent } from './card/card.component';
import { BoardsRoutingModule } from './boards-routing.module';
import { BoardsComponent } from './boards.component';

@NgModule({
  imports: [
    SharedModule,
    BoardsRoutingModule
  ],
  exports: [],
  declarations: [
    BoardsComponent,
    BoardComponent,
    LineComponent,
    CardComponent
  ]
})
export class BoardsModule { }
