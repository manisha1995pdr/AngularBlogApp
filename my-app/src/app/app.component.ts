import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  status : boolean = false;
  username: string = "manisha";
  password: string =   "MSNKD";
  title = 'app';
  link = {
    posts: ["/posts"]
  }
  onLogin(data){
    if(this.username == data.name && this.password == data.password){
      this.status = true;
    }
  }
  OnLogout(data){
    this.status = false;
  }

}
