import { Component, OnInit } from '@angular/core';
import { ColaboradorService } from 'src/app/services/colaborador.service';

@Component({
  selector: 'app-skandia',
  templateUrl: './skandia.component.html',
  styleUrls: ['./skandia.component.scss'],
})
export class SkandiaComponent implements OnInit {
  // Definición de la propiedad en el componente
  public efectivo: string = 'Efectivo';
  public cuenta: string = 'Ya cuenta con $';
  public products: any[] = [];
  constructor(private _colaboradorService: ColaboradorService) {}

  ngOnInit(): void {
    this._colaboradorService.obtener_oskania().subscribe((response) => {
      console.log('response:', response);
      this.products = response.listCard; // Asegúrate de asignar response.listCard
    });
  }
}
