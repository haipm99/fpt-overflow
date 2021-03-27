import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TestNgxsComponent} from './compoment/Demo/test-ngxs/test-ngxs.component';
import { HomeComponent } from './compoment/home/home.component';
import { QuestionsComponent } from './compoment/questions/questions.component';
const routes: Routes = [

    {path:'test',component: TestNgxsComponent },
    {path: 'home', component : HomeComponent},
    {path: 'questions', component : QuestionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
