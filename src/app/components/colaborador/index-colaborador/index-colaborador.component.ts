import { Component, OnInit } from '@angular/core';
import { ColaboradorService } from 'src/app/services/colaborador.service';

@Component({
  selector: 'app-index-colaborador',
  templateUrl: './index-colaborador.component.html',
  styleUrls: ['./index-colaborador.component.scss'],
})
export class IndexColaboradorComponent implements OnInit {
  public token = localStorage.getItem('token');
  public colaboradores: Array<any> = [];

  constructor(private _colaboradorService: ColaboradorService) {}

  ngOnInit(): void {
    this.inti_data();
  }

  inti_data() {
    this._colaboradorService.lista_colaboradores_admin(this.token).subscribe(
      (response) => {
        console.log(response);
        console.log('token', this.token);

        this.colaboradores = response.data;
        // this.load_data = false;
        // setTimeout(() => {
        //   this.load_data = false;
        // }, 3000);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
