import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { UrlService } from 'src/app/provider/url.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  senha: string
  constructor(public alert: AlertController, public nav: NavController, public http: HttpClient, public url: UrlService) { }

  ngOnInit() {
  }

  async logar() {
    if (this.email == undefined || this.senha == undefined) {
      this.url.alertas('Atenção', 'Preencha todos os campos');
    } else {
      this.http.get(this.url.getUrl() + "login.php?email=" + this.email + "&senha=" + this.senha)
        .subscribe(
          data => {
            console.log(data);
            if (data.msg.logado) {

            }
          },
          erro => { console.log("Ocorreu um erro"); }
        )
    }
  }

}

