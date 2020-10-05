import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SingInComponent } from './components/sing-in/sing-in.component';
import { Routes,RouterModule  } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { CatalogoComponent } from './components/clientes/catalogo/catalogo.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SingInComponent },
  { path: 'inicio', component: ClienteComponent,canActivate:[AuthGuard] },
  { path: 'clientes', component: CatalogoComponent,canActivate:[AuthGuard] }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)    
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
