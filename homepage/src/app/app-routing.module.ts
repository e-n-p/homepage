import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LampiComponent } from './lampi/lampi.component';

const routes: Routes = [
    { path: '', redirectTo: '/homepage', pathMatch: 'full'},
    { path: 'homepage', component: MainComponent},
    { path: 'lampi', component: LampiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
