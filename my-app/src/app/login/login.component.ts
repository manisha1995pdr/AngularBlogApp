import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
@Output() login: EventEmitter<object> = new EventEmitter();
  // users: object[{
  //   usersName: "Manisha",
  //
  // }]
  constructor( ) { }

  onsubmit(first, pass){

 this.login.emit({name: first, password: pass})
  }


  ngOnInit() {
  }


}
