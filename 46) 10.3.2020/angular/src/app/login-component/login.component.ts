import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UsersService } from '../Services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{
  //declare properties
  loginForm: FormGroup;
  errorMsg: string = null;

  constructor(private usersService: UsersService, private router: Router)
  {
    this.loginForm = new FormGroup({
      username: new FormControl(null, 
        [ Validators.required, Validators.minLength(2) ]),
      password: new FormControl(null, 
          [ Validators.required, Validators.minLength(6) ]),
    });
  }

  ngOnInit(): void
  {
    //loading data from database
  }

  onLoginClick()
  {
    this.loginForm["submitted"] = true;
    if (this.loginForm.valid == true)
    {
      //send req
      this.usersService
      .getUsersByUserNameAndPassword
      (this.loginForm.value.username, 
        this.loginForm.value.password)

      .subscribe(

        (response) => {

          console.log(response);
          if (response.length == 1)
          {
            this.usersService.isLoggedIn = true;
            console.log("Login Success");
            this.router.navigate( [ "/dashboard" ] );
          }

          else
          {
            this.usersService.isLoggedIn = false;
            console.log("Login Failed");
            this.errorMsg = "Invalid username and password";
          }
          
        },

        (err) => {
          console.log(err);
        }

      );
    }
    else
    {
      console.log("Invalid");
    }
  }
}

