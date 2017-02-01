import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { PostsService } from './posts.service';
import { MotesService } from './motes.service';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { MotesComponent } from './motes/motes.component';
import { BarchartComponent } from './barchart/barchart.component';

// Define the routes
const ROUTES = [
  {
    path: '',
    redirectTo: 'motes',
    pathMatch: 'full'
  },
  {
    path: 'motes',
    component: MotesComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    MotesComponent,
    BarchartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES) // Add routes to the app
  ],
  providers: [
    MotesService,
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
