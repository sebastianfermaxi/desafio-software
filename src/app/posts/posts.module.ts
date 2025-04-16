import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PostDetailComponent,
    PostsListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'', component: PostsListComponent},
      {path:'post/:id', component: PostDetailComponent}
    ])
  ]
})
export class PostsModule { }
