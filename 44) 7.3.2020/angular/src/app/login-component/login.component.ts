import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{
  //declare properties
  loginForm: FormGroup;

  constructor()
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
      console.log(this.loginForm.value)
    }
    else
    {
      console.log("Invalid");
    }
  }
}

