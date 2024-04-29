import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonIcon, IonGrid, IonCol, IonRow, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonCard, IonFooter, IonItem, IonFab, IonFabButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { settings, add } from 'ionicons/icons'
import { CitaRandomComponent } from '../cita-random/cita-random.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonFabButton, IonFab, IonItem, IonFooter, IonCard, IonCardTitle, IonCardSubtitle, IonCardContent, IonCardHeader, IonRow, IonCol,
     IonIcon, IonButtons, IonButton, IonHeader, IonToolbar, IonTitle, IonContent, CitaRandomComponent, IonGrid],
})


export class HomePage {


  constructor(
    private router: Router,
      
  ) {addIcons({settings, add})}


  goToConfiguracion() {
  this.router.navigate(['/configuracion']);
}

goToGestionCitas() {
  this.router.navigate(['/gestion-citas']);
  }

 




}
