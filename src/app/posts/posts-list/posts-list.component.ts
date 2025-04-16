import { Component } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css',
  standalone: false
})
export class PostsListComponent {

  posts: any[] = [];

  loading: boolean = true;
  page: number = 1;
  postsPerPage = 10;
  paginatedPosts: any[] = [];

  constructor(private postService: PostsService, private router: Router){ }

  ngOnInit(){
    
    this.postService.getPosts().subscribe((data)=>{

      if(data){
        this.posts = data;
        this.updatePosts();
        this.loading = false;
      }else{
        console.log('No hay datos')
      }
    })

  }

  goPostDetail(id: string){
    this.router.navigate(['post', id]);
  }

  updatePosts(){
    const start = (this.page -1)* this.postsPerPage;
    const end = start + this.postsPerPage;
    this.paginatedPosts = this.posts.slice(start, end);
  }

  changePage(page: number){
    this.page = page;
    this.updatePosts();
  }
}
