import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../shared/auth/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {


  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router) {

  }
  ngOnInit(): void {
    this.checkLogin()
  }

  logout() {
    this.authService.clear()
    this.toastr.success("Logout Successfull")
    this.router.navigateByUrl("/login")
  }
  isLoggedIn: boolean = false

  checkLogin() {
    if (this.authService.getIsLoggedIn() == "true" && this.authService.getEmail !== null) {
      this.isLoggedIn = true
    }
    else {
      this.isLoggedIn = false
    }

  }



}
