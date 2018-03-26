import { NgModule } from '@angular/core';
import { Routes, RouterModule, Params } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { DetailsComponent } from './details/details.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


const routes: Routes = [
  { path:'home', component: HomeComponent },
  { path: 'edit/:id', component: EditComponent},
  { path: 'new', component: NewComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home'},
];

@NgModule({
  imports: [
  RouterModule.forRoot(routes),
  HttpClientModule,
  FormsModule,
  BrowserModule,
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
