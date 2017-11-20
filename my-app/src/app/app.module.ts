import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InputComponent } from './input/input.component';
import { DetailComponent } from './detail/detail.component';
import { PostComponent } from './post/post.component';
import {RouterModule} from "@angular/router";
import {WidgetService} from "./widget.service";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";

const approutes = [
  {path: "", redirectTo: '/login', pathMatch: 'full'},
  {path: "home", component: LoginComponent },
  {path: "posts", component: PostComponent},
  {path: "**", component: LoginComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InputComponent,
    DetailComponent,
    PostComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(approutes),
    HttpModule,
    FormsModule
  ],
  providers: [WidgetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
