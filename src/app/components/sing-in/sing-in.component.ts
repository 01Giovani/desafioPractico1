import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service'

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent implements OnInit {

  constructor(
    public authService : AuthServiceService) { }

  ngOnInit(): void {
  }

  
}