import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  url: string = "http://localhost/catalogo/catalogo/php/";
  constructor(
    private http: HttpClient, public alert: AlertController
  ) { }

  getUrl() {
    return this.url;
  }
  
  async alertas(titulo, msg) {
    const alert = await this.alert.create({
      header: titulo,
      message: msg,
      buttons: ['ok']
    });
    await alert.present(); 
  }



}
