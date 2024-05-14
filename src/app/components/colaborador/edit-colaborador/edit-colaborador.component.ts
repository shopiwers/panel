import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ColaboradorService } from 'src/app/services/colaborador.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-colaborador',
  templateUrl: './edit-colaborador.component.html',
  styleUrls: ['./edit-colaborador.component.scss'],
})
export class EditColaboradorComponent implements OnInit {
  public id = '';
  public load_btn = false;

  public colaborador: any = {
    genero: '',
    rol: '',
    pais: '',
  };

  public token: any = this._colaboradorService.getToken();

  constructor(
    private _colaboradorService: ColaboradorService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      this.id = params['id'];

      this._colaboradorService
        .obtener_datos_colaborador_admin(this.id, this.token)
        .subscribe((response) => {
          console.log('response:', response);
          this.colaborador = response.data;
        });
    });
  }

  actualizar(actualizarForm: any) {
    if (actualizarForm.valid) {
      this.load_btn = true;
      this._colaboradorService
        .editar_colaborador_admin(this.id, this.colaborador, this.token)
        .subscribe(
          (response) => {
            Swal.fire(
              'Buen trabajo!',
              'Se Actualizo un nuevo coordinado!',
              'success'
            );

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

  eliminar() {
    this._colaboradorService
      .eliminar_colaborador_admin(this.id, this.token)
      .subscribe(
        (response) => {
          Swal.fire(
            'Buen trabajo!',
            'Se elimino el coordinador correctamente!',
            'success'
          );
          this._router.navigate(['/colaborador']);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
