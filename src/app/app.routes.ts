import { Routes } from '@angular/router';

export const routes: Routes = [

    { path:'', loadChildren: ()=>import('./posts/posts.module').then(m=> m.PostsModule)}

];
