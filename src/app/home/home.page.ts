import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonIcon, IonGrid, IonCol, IonRow, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonCard, IonFooter, IonItem, IonFab, IonFabButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { settings, add } from 'ionicons/icons'
import { CitaRandomComponent } from '../cita-random/cita-random.component';
import { RouterModule } from '@angular/router';// importacion para la navegacion en la paginas 


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonFabButton, IonFab, IonItem, IonFooter, IonCard, IonCardTitle, IonCardSubtitle, IonCardContent, IonCardHeader, IonRow, IonCol,
    IonIcon, IonButtons, IonButton, IonHeader, IonToolbar, IonTitle, IonContent, 
    CitaRandomComponent, IonGrid, RouterModule],
})


export class HomePage {

  constructor() {addIcons({settings, add})}

}