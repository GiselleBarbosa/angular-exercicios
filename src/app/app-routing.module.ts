import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './componentes/pages/page1/page1.component';
import { Page2Component } from './componentes/pages/page2/page2.component';
import { Page3Component } from './componentes/pages/page3/page3.component';


const routes: Routes = [
  { path: 'home', component: Page1Component },
  { path: 'page2', component: Page2Component },
  { path: 'page3', component: Page3Component },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
