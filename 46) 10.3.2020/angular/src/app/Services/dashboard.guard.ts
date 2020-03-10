import { UsersService } from './users.service';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: "root" })
export class DashboardGuardService
{
  constructor(private usersService: UsersService)
  {
  }

  canActivate(): boolean
  {
    if (this.usersService.isLoggedIn == true)
    {
      return true; //permission given for /dashboard
    }
    else
    {
      return false; //permission denied for /dashboard
    }
  }
}

