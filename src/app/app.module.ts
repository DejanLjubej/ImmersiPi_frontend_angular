import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { RoutingModule } from './routing/routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { FooterUpperComponent } from './components/footer/footer-upper/footer-upper.component';

@NgModule({
  declarations:
  [
    AppComponent,
    NavbarComponent,
    FrontPageComponent,
    PageNotFoundComponent,
    FooterComponent,
    FooterUpperComponent
  ],
  imports:
  [
    RoutingModule,
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
