import { Component } from '@angular/core';
import { UsersService } from './Services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  constructor(public usersService: UsersService, private router: Router)
  {
  }

  onLogoutClick()
  {
    this.usersService.isLoggedIn = false;
    this.router.navigate( [ "/login" ] );
  }
}


