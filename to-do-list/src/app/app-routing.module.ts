import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodolistComponent } from './models/todolist/todolist.component';
import { AuthComponent } from './models/auth/auth.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'todolist', component: TodolistComponent, canActivate: [authGuard] },
  { path: '', redirectTo: 'todolist', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
