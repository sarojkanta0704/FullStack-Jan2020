import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login-component/login.component';
import { RegistrationComponent } from './registration-component/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegistrationComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "**", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
