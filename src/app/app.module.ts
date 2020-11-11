import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { RouterModule } from '@angular/router';
import { AuthorsService } from './authors.service';
import { HomeComponent } from './home/home.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { ContainerComponent } from './favorite/container/container.component';
import { CastingComponent } from './casting/casting.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LikeComponent } from './like/like.component';
import { LikeContainerComponent } from './like/container/container.component';
import { ZippyComponent } from './zippy/zippy.component';
import { ZippyContainerComponent } from './zippy/container/container.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    HomeComponent,
    FavoriteComponent,
    ContainerComponent,
    CastingComponent,
    LikeComponent,
    LikeContainerComponent,
    ZippyComponent,
    ZippyContainerComponent,
    FormComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'authors', component: AuthorsComponent },
      { path: 'favorite', component: FavoriteComponent },
      { path: 'casting', component: CastingComponent },
      { path: 'like', component: LikeComponent },
      { path: 'zippy', component: ZippyComponent },
      { path: 'form', component: FormComponent },
      { path: 'reactive', component: ReactiveFormComponent }
    ])
  ],
  providers: [AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
