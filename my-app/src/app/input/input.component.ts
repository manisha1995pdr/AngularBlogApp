import {Component, EventEmitter, Output} from '@angular/core';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent  {
  @Output () notify: EventEmitter<object> = new EventEmitter<object>();


  addBlog(name, title, post): void{
    console.log(name+title+post);
this.notify.emit({authorname:name,title:title,Post:post});
  }

}
