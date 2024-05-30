import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PrecioComponent } from './components/precio/precio.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './guardia/auth.guard';
import { AuthService } from './services/auth.service';
import { AuthComponent } from './components/auth/auth.component';
import { AuthLoginComponent } from './components/auth-login/auth-login.component';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { FormsModule } from '@angular/forms';
import { AuthRegisterComponent } from './components/auth-register/auth-register.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PrecioComponent,
    ProtegidaComponent,
    AuthComponent,
    AuthLoginComponent,
    AuthRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    /* PARA AUTH 0
    AuthModule.forRoot({
      domain:"dev-gin5bkucdwzu3jbf.us.auth0.com",
      clientId:"3DMy4BQ5vbAqVCYBefZW95zv9HdTpemA", 
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
    */
  ],
  providers: [AuthService, AuthGuard, JwtHelperService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS }],
  bootstrap: [AppComponent]
})
export class AppModule { }
