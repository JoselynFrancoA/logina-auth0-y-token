import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css'] // Corrige 'styleUrl' a 'styleUrls'
})
export class AuthLoginComponent {
  username: string = '';
  password: string = '';
  public m: string='';
  constructor(public authService: AuthService, public router: Router) {}

  login(): void {
    this.authService.login(this.username, this.password).subscribe(
      () => {
        // Si el inicio de sesión es exitoso, redireccionar a la página protegida
        this.m='';
        this.router.navigate(['/protegida']);
      },
      error => {
        // Manejar errores, como credenciales incorrectas
        this.m ='Error al iniciar sesión';
        console.error('Error al iniciar sesión:', error);
        // Aquí puedes mostrar un mensaje de error al usuario
      }
    );
  }
}
