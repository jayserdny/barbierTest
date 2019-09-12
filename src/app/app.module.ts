import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/footer/footer.component';
import {FormsModule} from '@angular/forms';
import { LightboxModule } from 'ngx-lightbox';
import { NgxMasonryModule } from 'ngx-masonry';
import { ImageComponent } from './shared/image/image.component';
import { BiographyComponent } from './pages/biography/biography.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { PostComponent } from './pages/post/post.component';
import { FloraAndFaunaComponent } from './pages/flora-and-fauna/flora-and-fauna.component';
import { SmallPTGSComponent } from './pages/small-ptgs/small-ptgs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    ImageComponent,
    BiographyComponent,
    CatalogComponent,
    PostComponent,
    FloraAndFaunaComponent,
    SmallPTGSComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LightboxModule,
    NgxMasonryModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
