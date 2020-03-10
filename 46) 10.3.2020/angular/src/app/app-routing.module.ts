import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login-component/login.component';
import { RegistrationComponent } from './registration-component/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardGuardService } from './Services/dashboard.guard';


const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegistrationComponent },

  { path: "dashboard", component: DashboardComponent, canActivate: [ DashboardGuardService ] },

  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "**", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
