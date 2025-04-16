import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css',
  standalone: false
})
export class PostDetailComponent implements OnInit {

  loading: boolean = true;
  postId: string = '';
  postDetails: any = {}

  constructor( private route: ActivatedRoute, private postService: PostsService ){ }

  ngOnInit(){
    this.route.params.subscribe((data)=>{
      this.postId = data['id'];
      this.postService.getPostById(this.postId).subscribe((data)=>{
        this.postDetails = data;
        this.loading = false;
      })
    })

  }

}
