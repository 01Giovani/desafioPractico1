import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes,RouterModule  } from '@angular/router';
import { AuthServiceService } from './shared/services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'guia2';

  constructor(public authService : AuthServiceService){}

}
