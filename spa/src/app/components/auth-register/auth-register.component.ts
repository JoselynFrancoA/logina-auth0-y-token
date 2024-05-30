// auth-register.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-register',
  templateUrl: './auth-register.component.html',
  styleUrls: ['./auth-register.component.css']
})
export class AuthRegisterComponent {
  username: string = '';
  password: string = '';
  email: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  registrarse(): void {
    this.authService.register(this.username, this.password, this.email).subscribe({
      next: (response) => {
        console.log('Usuario registrado:', response.message);
        this.authService.login(this.username, this.password).subscribe(
          () => {
            // Si el inicio de sesión es exitoso, redireccionar a la página protegida
            this.router.navigate(['/protegida']);
          },
          error => {
            // Manejar errores, como credenciales incorrectas
            console.error('Error al iniciar sesión:', error);
            // Aquí puedes mostrar un mensaje de error al usuario
          }
        );
        // Aquí puedes redirigir al usuario al login o mostrar un mensaje de éxito
      },
      error: (error) => {
        console.error('Error en el registro:', error.error.message);
      }
    });
  }
}
