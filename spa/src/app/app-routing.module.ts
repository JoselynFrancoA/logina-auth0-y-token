import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PrecioComponent } from './components/precio/precio.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { AuthLoginComponent } from './components/auth-login/auth-login.component';
import { AuthGuard } from './guardia/auth.guard';
import { AuthRegisterComponent } from './components/auth-register/auth-register.component';

const routes: Routes = [
  {path:'home', component:HomeComponent, canActivate:[AuthGuard]},
  {path:'precios', component:PrecioComponent,canActivate:[AuthGuard]},
  {path:'protegida', component:ProtegidaComponent, canActivate:[AuthGuard]},
  {path:'login', component:AuthLoginComponent},
  {path:'register', component:AuthRegisterComponent},
  {path:'**', pathMatch:'full', redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
