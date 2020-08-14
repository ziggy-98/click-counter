import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  count:number = 0;
  lat:number = 51.678418;
  lng:number = 7.809007;
  

  updateCounter(){
    this.count = this.count+1;
  }


}
