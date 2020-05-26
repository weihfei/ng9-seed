import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from "./modules/login/login.component";
import { NoPageComponent } from "./modules/noPage/noPage.component";
import { IndexComponent } from "./modules/index/index.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent,data:{title:'登录页'}},
  { path: 'index', component: IndexComponent,data:{title:'首页',breadcrumb:'首页'}},
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '**', component: NoPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
