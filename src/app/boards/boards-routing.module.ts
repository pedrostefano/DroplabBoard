import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardsComponent } from './boards.component';
import { BoardComponent } from './board/board.component';


const routes: Routes = [
  { path: 'boards', component: BoardsComponent},
  { path: 'board', component: BoardComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})

export class BoardsRoutingModule { }
