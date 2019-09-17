import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontComponent } from './pages/front/front.component';
import { from } from 'rxjs';
import { ConfirmComponent } from './pages/confirm/confirm.component';

const routes: Routes = [
  {path:'',component:FrontComponent},
  {path:'confirm',component:ConfirmComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
