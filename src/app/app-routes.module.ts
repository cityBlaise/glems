import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Home/home-page/home-page.component';
import { CommandCheckComponent } from './command-check/command-check.component';

const appRoutes: Routes = [
  { path: 'home', component: HomePageComponent }, 
  { path: 'command/:commandId', component: CommandCheckComponent },
  { path: '**', redirectTo:'/home'},
  ];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutesModule { }
