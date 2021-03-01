import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { UrlService } from '../../provider/url.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  produtos: any = [];
  url: string;
  
  constructor(public httpClient : HttpClient, public serviceUrl: UrlService) { }

 ngOnInit(){
  this.httpClient.get(this.serviceUrl.getUrl()+"listDados.php")
  .subscribe(
    listDados => {
      console.log(listDados);
      this.produtos = listDados;
      this.url = this.serviceUrl.getUrl();
    }, 
    erro => { console.log("Ocorreu um erro");}
  )
 }

}
