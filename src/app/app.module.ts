import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { RoutingModule } from './routing/routing.module';

import { environment } from '../environments/environment';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { FooterUpperComponent } from './components/footer/footer-upper/footer-upper.component';
import { FeaturedGameComponent } from './components/front-page/featured-game/featured-game.component';
import { GamesPageComponent } from './components/games-page/games-page.component';
import { PageUnderConstructionComponent } from './components/page-under-construction/page-under-construction.component';
import { ProductsComponent } from './components/front-page/products/products.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { AboutPageComponentCard } from './components/front-page/about-page/about-page.component';
import { NewsPageComponent } from './components/front-page/news-page/news-page.component';

// Firebase
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { providePerformance,getPerformance } from '@angular/fire/performance';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageNotFoundComponent,
    FrontPageComponent,
    FooterComponent,
    FooterUpperComponent,
    FeaturedGameComponent,
    GamesPageComponent,
    PageUnderConstructionComponent,
    ProductsComponent,
    AboutPageComponent,
    AboutPageComponentCard,
    NewsPageComponent,
  ],
  imports: [
    RoutingModule,
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    providePerformance(() => getPerformance()),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  providers: [
    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
