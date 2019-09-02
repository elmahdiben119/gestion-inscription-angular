import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { PagenotfoundComponent } from './Errors/PageNotFound.component';
import { UserModule } from './User/user.module';
import { LoginComponent } from './Login/Login.component';
import { AuthGuard } from './auth/auth.guard';
import { ConnectingService } from './Services/connecting.service';

@NgModule({

  declarations: [
    PagenotfoundComponent,
    LoginComponent,
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    routing,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    UserModule
  ],
  providers: [
    ConnectingService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
