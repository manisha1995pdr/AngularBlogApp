import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() blogs;
  @Output () deleteID:EventEmitter<number> = new EventEmitter<number>();
  @Output () updateEmiter:EventEmitter<object> = new EventEmitter<object>();
  constructor() {
    console.log("ïnside detail");
    console.log("Inside detail " + this.blogs);
  }

  deleteBlog(id){
    this.deleteID.emit(id);
  }
  updateBlog(blog){
    this.updateEmiter.emit(blog);
  }
  ngOnInit() {
  }

}
