import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { MainPageComponent }      from './main-page/main-page.component';
import { EditPageComponent }   from './edit-page/edit-page.component';
import { SinglePageComponent }  from './single-page/single-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main',  component: MainPageComponent },
  { path: 'single-product/:id', component: EditPageComponent },
  { path: 'edit',     component: SinglePageComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
