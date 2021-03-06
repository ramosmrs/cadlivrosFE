import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './components/book/book-list/book-list.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';

const routes: Routes = [
  {path:'', component: NavComponent, children: [
    {path:'home', component: HomeComponent},
    {path:'books', component: BookListComponent}
  ]}
];
/*  { path: 'login', component:LoginComponent},
  {
    path:'', component: NavComponent, children: [
      {path:'home', component: HomeComponent},
      {path:'books', component: BookListComponent}

    ]
  },
*/

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
