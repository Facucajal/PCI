import { Component } from '@angular/core';
import { NotificationServiceService } from './services/notification-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PCI-FRONTEND.WEB';
  altaNot = false;
  bajaNot= false;
  modNot= false;

  constructor(private notificationService: NotificationServiceService) {
    this.notificationService.notificationAlta.subscribe(() => {
      this.altaNot = true;
    });

    this.notificationService.notificationBaja.subscribe(() => {
      this.bajaNot = true;
    });

    this.notificationService.notificationModificacion.subscribe(() => {
      this.modNot = true;
    });
  }
  mostrarAltaNot(){
    this.altaNot = !this.altaNot;
  }

  mostrarBajaNot(){
    this.bajaNot = !this.bajaNot;
  }

  mostrarModNot(){
    this.modNot = !this.modNot;
  }
}
