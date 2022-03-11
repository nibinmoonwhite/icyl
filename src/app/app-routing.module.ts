import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventListComponent } from './event-list/event-list.component';
import { RamadanComponent } from './ramadan/ramadan.component';

const routes: Routes = [
  {path:'',component:RamadanComponent},
  {path:'eventlist',component:EventListComponent},
  {path:'eventlist/event-detail/:id',component:EventDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
