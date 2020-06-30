import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PostBookComponent} from './post-book/post-book.component';
import {SearchComponent} from './search/search.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { from } from 'rxjs';


const routes: Routes = [
  {path: 'books',component: HomeComponent},
  {path: 'search',component:SearchComponent},
  {path: 'post',component:PostBookComponent},
  {path: '', redirectTo: 'books', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
