import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const indexRoutes: Routes = [

];

@NgModule({
  imports: [RouterModule.forChild(indexRoutes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }