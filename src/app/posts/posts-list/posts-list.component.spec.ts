import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsListComponent } from './posts-list.component';
import { provideHttpClient } from '@angular/common/http';
import { PostsService } from '../../services/posts.service';
import { PostsModule } from '../posts.module';

describe('PostsListComponent', () => {
  let component: PostsListComponent;
  let fixture: ComponentFixture<PostsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostsModule
      ],
      providers: [
        provideHttpClient(),
        PostsService 
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('deberia mostrar los posts', async()=>{

    await fixture.whenStable();
    fixture.detectChanges();

    const todoHtml: HTMLElement = fixture.nativeElement;
    const posts = todoHtml.querySelectorAll('[data-testid="post-title"]');

    expect(posts.length).toBeGreaterThan(9);
  } )

});
