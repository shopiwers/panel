import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColaboradorService } from 'src/app/services/colaborador.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public user = {
    email: '',
    password: '',
  };

  public usuario: any = {};
  public token: any = localStorage.getItem('token');
  public marca: any = {};

  constructor(
    private _colaboradorService: ColaboradorService,
    private _router: Router
  ) {
    // this.token = this._adminService.getToken();
  }

  ngOnInit(): void {
    //para que despues de loguearse no pueda volver al login
    if (this.token) {
      this._router.navigate(['/dashboard']);
    } else {
      //Se mantiene en el componente
    }
  }

  login(loginForm: any) {
    if (loginForm.valid) {
      //console.log(this.user);

      let data = {
        email: this.user.email,
        password: this.user.password,
      };

      this._colaboradorService.login_admin(data).subscribe(
        (response) => {
          if (response.data == undefined) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'El correo o contraseña no son incorrectos!',
            });
          } else {
            this.usuario = response.data;
            localStorage.setItem('token', response.token);
            localStorage.setItem('_id', response.data._id);
            localStorage.setItem('user', JSON.stringify(response.data));

            this._router.navigate(['/dashboard']);
          }
        },
        (error: any) => {
          console.log(error);
        }
      );
    } else {
      Swal.fire({
        icon: 'error',
        title: 'los datos no son validos...',
        text: 'revisalos e ingresa de nuevo',
      });
    }
  }
}
