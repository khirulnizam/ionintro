import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	user:any;
  constructor() {}

  helloworld(){
  	alert("Hello myfriend "+this.user);
  }

}
