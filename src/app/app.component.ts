import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'khushis-doodles';
  imagesInfo: any = [];

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.httpClient.get("assets/info.json").subscribe(data =>{
      console.log(data);
      this.imagesInfo = data;
    })
  }
}
