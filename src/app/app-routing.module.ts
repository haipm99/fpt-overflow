import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TestNgxsComponent} from './compoment/Demo/test-ngxs/test-ngxs.component';
const routes: Routes = [

    {path:'test',component: TestNgxsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
