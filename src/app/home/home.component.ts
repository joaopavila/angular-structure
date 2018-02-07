import { Component, OnInit } from '@angular/core';
import { GetPostService } from './services/get-post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  responseServicePosts: Object;

  constructor(private services: GetPostService) { }

  ngOnInit() {
    this.getPosts();
  }

  public getPosts() {
    this.services.getPost()
      .subscribe(res => {
        console.log(res);
        this.responseServicePosts = res;
      });
  }

}
