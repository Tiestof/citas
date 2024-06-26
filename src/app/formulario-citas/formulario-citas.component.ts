import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, 
  IonCardContent, IonButton, IonItem, IonInput, IonList, 
  IonText } from "@ionic/angular/standalone";
import { Cita } from '../Modelo/cita';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-formulario-citas',
  templateUrl: './formulario-citas.component.html',
  styleUrls: ['./formulario-citas.component.scss'],
  standalone: true,
  imports: [IonText, IonList, IonInput, IonItem,
    IonCard,IonButton,IonCardContent,IonCardTitle,
    IonCardSubtitle,IonCardHeader, CommonModule,FormsModule]

  
})
export class FormularioCitasComponent  implements OnInit {
  // declarcion de variables para almacenar los datos de los inputs
  autorStr: string = ""
  citaStr: string = ""

  // 
  addCita: Cita = new Cita(this.citaStr, this.autorStr, 0)

  // usamos el Output para poder actualizar la lista con la nueva cita.
  // actualizamos la Lista en el compoenente lista-citas
  @Output() onCreate = new EventEmitter <Cita>()

  constructor() {}

  ngOnInit() {}

  onClick(){
    // rescatamos los datos desde el fromulario 
    this.addCita.cita = this.citaStr
    this.addCita.autor = this.autorStr
    this.onCreate.emit(this.addCita)

  }
}
