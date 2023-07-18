import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationServiceService {
  private notificationSubjectAlta = new Subject<void>();
  public notificationAlta = this.notificationSubjectAlta.asObservable();

  private notificationSubjectBaja = new Subject<void>();
  public notificationBaja = this.notificationSubjectBaja.asObservable();

  private notificationSubjectModificacion = new Subject<void>();
  public notificationModificacion = this.notificationSubjectModificacion.asObservable();

  altaNotificacion() {
    this.notificationSubjectAlta.next();
  }

  bajaNotificacion() {
    this.notificationSubjectBaja.next();
  }
  modificacionNotificacion() {
    this.notificationSubjectModificacion.next();
  }

  constructor() { }
}
