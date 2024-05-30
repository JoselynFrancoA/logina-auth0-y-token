import { Component, Inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AsyncPipe, DOCUMENT, NgIf } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(public auth: AuthService, public router: Router/*, @Inject(DOCUMENT) public document: Document*/){
      
  }
  
  login(){
    this.router.navigate(['/login']);
  }
  
  /*
  login(){
    this.auth.loginWithRedirect()
  }
  */
}
