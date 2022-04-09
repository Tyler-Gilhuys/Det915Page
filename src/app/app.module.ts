import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TopNavBarComponent } from './navigation/topnavbar.component';
import { FooterComponent } from './navigation/footer.component';
import { CalendarComponent } from './body/calendar.component';
import { HomePageLayout } from './routes/home-page-layout.component';
import { AnnounceComponent } from './body/announce.component';
import { WKComponent } from './body/wk-card.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { HttpClientModule } from '@angular/common/http';
import { ContinuityLayout } from './routes/continuity-layout.component';
import { PictureLayout } from './routes/picture-layout.component';
import { OperationsLayout } from './routes/operations-layout.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';


@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    FooterComponent,
    CalendarComponent,
    HomePageLayout,
    AnnounceComponent,
    WKComponent,
    UserInfoComponent,
    ContinuityLayout,
    PictureLayout,
    OperationsLayout
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
