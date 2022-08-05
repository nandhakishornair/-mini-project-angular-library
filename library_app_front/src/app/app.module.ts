import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';

import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';

// import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
// import {MatGridListModule} from '@angular/material/grid-list';
import { ServiceService } from './service.service';
import { SigninComponent } from './signin/signin.component';
import { UpdateComponent } from './update/update.component';
import { TockenInterceptorService } from './tocken-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    FooterComponent,
    AddComponent,
    ViewComponent,
    SigninComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // MatCardModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ServiceService,AuthService,{
    provide: HTTP_INTERCEPTORS,
    useClass: TockenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
