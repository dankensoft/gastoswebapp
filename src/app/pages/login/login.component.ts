import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoginModel } from 'src/app/models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  usuario = '';
  clave = '';
  error = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    const creds: LoginModel = { usuario: this.usuario, clave: this.clave };
    this.authService.login(creds).subscribe({
      next: (success) => {
        if (success) {
          this.router.navigate(['/dashboard']);
          localStorage.setItem('usuario', this.usuario);
        } else {
          this.error = 'Credenciales incorrectas';
        }
      },
      error: () => {
        this.error = 'Error de conexión al servidor';
      }
    });
  }
}
