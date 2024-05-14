import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColaboradorService } from 'src/app/services/colaborador.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-colaborador',
  templateUrl: './create-colaborador.component.html',
  styleUrls: ['./create-colaborador.component.scss'],
})
export class CreateColaboradorComponent implements OnInit {
  public load_btn = false;

  public colaborador: any = {
    genero: '',
    rol: '',
    pais: '',
  };

  public token: any = this._colaboradorService.getToken();

  constructor(
    private _colaboradorService: ColaboradorService,
    private _router: Router
  ) {}

  ngOnInit(): void {}

  registrar(registroForm: any) {
    if (registroForm.valid) {
      this.load_btn = true;
      this._colaboradorService
        .registro_colaborador_admin(this.colaborador, this.token)
        .subscribe(
          (response) => {
            Swal.fire(
              'Buen trabajo!',
              'Se registro un nuevo coordinado!',
              'success'
            );
            this.colaborador = {
              nombre: '',
              apellido: '',
              genero: '',
              telefono: '',
              email: '',
              rol: '',
              pais: '',
            };
            this._router.navigate(['/colaborador']);
            this.load_btn = false;
          },
          (error) => {
            console.log(error);
          }
        );
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ocurre algun error, faltan datos o son incorrectos!',
      });
    }
  }
}
