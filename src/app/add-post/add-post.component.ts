import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  constructor() { }
  blogs = []   
  ngOnInit(): void {
  }

  addPost(title, content) {
    let blog = { "title": title.value, "content": content.value };
    if(localStorage.getItem("blogs")){
      this.blogs = JSON.parse(localStorage.getItem("blogs"))
    }
    this.blogs.splice(0,0,blog);

    localStorage.setItem("blogs",JSON.stringify(this.blogs))

    title.value ="";
    content.value = "";
    alert("Post Submited");

  }

}

