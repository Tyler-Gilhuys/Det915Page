import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TopNavBarComponent } from './navigation/topnavbar.component';
import { FooterComponent } from './navigation/footer.component';
import { CalendarComponent } from './body/calendar.component';
import { HomePageLayout } from './routes/home-page-layout.component';
import { AnnounceComponent } from './body/announce.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    FooterComponent,
    CalendarComponent,
    HomePageLayout,
    AnnounceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
