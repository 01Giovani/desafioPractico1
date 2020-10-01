import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SingInComponent } from '../components/sing-in/sing-in.component';
import { Routes,RouterModule  } from '@angular/router';
import { ClienteComponent } from '../cliente/cliente.component';
import { AuthGuard } from '../shared/guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SingInComponent },
  { path: 'inicio', component: ClienteComponent,canActivate:[AuthGuard] }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    RouterModule
  ]
})
export class AppRoutingModule { }
