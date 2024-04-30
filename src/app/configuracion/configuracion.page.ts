import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonToggle, IonButtons, IonBackButton, ToggleChangeEventDetail } from '@ionic/angular/standalone';
import { IonToggleCustomEvent } from '@ionic/core';
import { ConfiguracionService } from '../configuracion.service';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButtons, IonToggle, IonItem, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})

export class ConfiguracionPage implements OnInit {

elimininarInicio: boolean = false;

  constructor(
    private configuracionService:ConfiguracionService
  ) { }

  async ngOnInit() { 

    this.elimininarInicio = await this.configuracionService.eliminarInicio()

  }

  ionChange($event: IonToggleCustomEvent<ToggleChangeEventDetail<any>>) {
  
    this.configuracionService.setEliminarInicio(this.elimininarInicio)

    }

}
