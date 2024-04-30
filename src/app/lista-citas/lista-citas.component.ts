import { Component, Input, OnInit, input } from '@angular/core';
import { IonContent, IonList, IonItem, IonCheckbox, IonLabel, IonToggle, IonButton, IonIcon, IonInfiniteScroll, IonInfiniteScrollContent } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { trash } from 'ionicons/icons'
import { Cita } from '../Modelo/cita';
import { ConsultaCitasService } from '../consulta-citas.service'; 
import { ConfiguracionService } from '../configuracion.service';

@Component({
  selector: 'app-lista-citas',
  templateUrl: './lista-citas.component.html',
  styleUrls: ['./lista-citas.component.scss'],
  standalone: true,
  imports: [IonInfiniteScrollContent, IonInfiniteScroll,  IonIcon, IonButton, IonToggle, IonLabel, IonCheckbox, IonContent, IonList, IonItem, CommonModule]
})
export class ListaCitasComponent  implements OnInit {

  //Usamos el decorador INput() para enviar la lista al componente  app-lista-citas
  @Input() _listaCita: Cita [] = [] 

  constructor(
    private consultaCitasService:ConsultaCitasService,
    private configuracionService:ConfiguracionService

  ) {addIcons({trash})}

  ngOnInit() {
    // usamos el observable que habiamos creado para la eliminacion del citas random.
    this.consultaCitasService.citaEliminada.subscribe(() => {
      this.cargarCitas(); 
    });
  }

  trackByCita(index: number, cita: Cita): number {
    return cita.id; // Usamos el identificador único del objeto Cita
  }

  eliminarCita(cita: Cita) {
    this.consultaCitasService.eliminarCita(cita);
  }

  async cargarCitas() {
    this._listaCita = await this.configuracionService.getListaCitas() || [];
  }

}
