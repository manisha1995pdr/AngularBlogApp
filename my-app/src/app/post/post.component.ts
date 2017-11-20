import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {WidgetService} from "../widget.service"
import {Blogs} from "./post";
var id = -1;

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  blogs: Blogs[];
  constructor( private request: WidgetService) { }
  @Output () logout: EventEmitter<string> = new EventEmitter();
  OnLogout(){
    this.logout.emit("false");
  }
  ngOnInit() {
    this.getBlogs();
  }

  getBlogs(){
    this.request.loadData()
      .subscribe((data) => {
        this.blogs = data;
        console.log("In Post " + this.blogs);
      })
  }
  addBlog(blog){
    if(id==(-1)){
      this.request.postData(blog)
        .subscribe((blog)=>{
          this.blogs.push(blog);
          console.log("inside addBlog" + blog);
          this.getBlogs();
        })
    }
    else{
      this.request.updateData(blog, id)
        .subscribe((data) => {
        id=-1;
        this.getBlogs();
          (<HTMLInputElement>document.getElementById("addbutton")).innerText = "Add"
        })
    }
  }

   deleteBlog(id){
     this.request.deleteData(id)
       .subscribe((data)=>{
        this.getBlogs();
       })
   }

   updateBlog(blog){
     (<HTMLInputElement>document.getElementById("authorname")).value = blog.authorname;
     (<HTMLInputElement>document.getElementById("title")).value = blog.title;
     (<HTMLInputElement>document.getElementById("post")).value = blog.Post;
     (<HTMLInputElement>document.getElementById("addbutton")).innerText = "Update";
     id=blog.id;
   }
}
