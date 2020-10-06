import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ClienteComponent } from './cliente/cliente.component';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { SingInComponent } from './components/sing-in/sing-in.component';
import { AuthServiceService } from './shared/services/auth-service.service'

import { AppRoutingModule } from './app-routing.module';
import { CatalogoComponent } from './components/clientes/catalogo/catalogo.component';
import { CatalogoServiciosComponent } from './components/servicios/catalogo-servicios/catalogo-servicios.component';
import { CatalogoConsultasComponent } from './components/consultas/catalogo-consultas/catalogo-consultas.component';
import { HttpClientModule } from '@angular/common/http';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    SingInComponent,
    CatalogoComponent,
    CatalogoServiciosComponent,
    CatalogoConsultasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
