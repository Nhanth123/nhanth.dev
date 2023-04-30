import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from "./home/home.component";
import {Routes, RouterModule} from "@angular/router";
import {ProjectComponent} from "./project/project.component";
import {BlogComponent} from "./blog/blog.component";
import {MyselfComponent} from "./myself/myself.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'projects', component: ProjectComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'me', component: MyselfComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
