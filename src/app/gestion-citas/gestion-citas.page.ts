import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { FormularioCitasComponent } from '../formulario-citas/formulario-citas.component';
import { ListaCitasComponent } from '../lista-citas/lista-citas.component';
import { ConsultaCitasService } from '../consulta-citas.service';
import { Cita } from '../Modelo/cita';


@Component({
  selector: 'app-gestion-citas',
  templateUrl: './gestion-citas.page.html',
  styleUrls: ['./gestion-citas.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, 
    CommonModule, FormsModule, ListaCitasComponent, FormularioCitasComponent]
})
export class GestionCitasPage implements OnInit {



  _cita: Cita [] = []

  constructor(private consultaCitasService:ConsultaCitasService) { }

  ngOnInit() {

    this.resfrescarComponentes()

  }

  private resfrescarComponentes(){
    //this._cita = this.consultaCitasService.getListaCitas()
    this.consultaCitasService.getListaCitas().then(cita => {
      this._cita = cita;
    });
  }

  onCreateCita($event: Cita) {

    const cita = new Cita($event.cita,$event.autor,$event.id)
    this.consultaCitasService.addCita(cita)
    this.resfrescarComponentes()

  }


}
