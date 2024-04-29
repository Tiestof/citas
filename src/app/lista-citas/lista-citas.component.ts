import { Component, Input, OnInit, input } from '@angular/core';
import { IonContent, IonList, IonItem, IonCheckbox, IonLabel, IonToggle, IonButton, IonIcon, IonInfiniteScroll, IonInfiniteScrollContent } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { trash } from 'ionicons/icons'
import { Cita } from '../Modelo/cita';




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

  constructor() {addIcons({trash})}

  ngOnInit() {

  }

}
