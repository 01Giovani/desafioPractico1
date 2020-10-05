import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service'

@Component({
  selector: 'app-Sign-in',
  templateUrl: './Sign-in.component.html',
  styleUrls: ['./Sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(
    public authService : AuthServiceService) { }

  ngOnInit(): void {
  }

  
}