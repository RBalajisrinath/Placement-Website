import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'] // Corrected 'styleUrl' to 'styleUrls'
})
export class UserLoginComponent implements OnInit {
  
  signupUsers: any[] = [];
  signupObj: any = {
    userName: '',
    email: '',
    password: ''
  };
  loginObj: any = {
    email: '',
    password: ''
  };
  loggedIn: boolean = false;

  constructor(private router: Router) {} // Inject Router in the constructor

  ngOnInit(): void {
    const localData = localStorage.getItem('signupUsers');
    if (localData != null) {
      this.signupUsers = JSON.parse(localData);
    }
  }

  onSignUp() {
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signUpUsers', JSON.stringify(this.signupUsers));
    this.signupObj = {
      userName: '',
      email: '',
      password: ''
    };
  }

  onLogin() {
    const isUserExist = this.signupUsers.find(m => m.email === this.loginObj.email && m.password === this.loginObj.password);
    if (isUserExist) {
      alert('User logged in successfully');
      this.router.navigate(['/placement']); 
    } else {
      alert('Wrong credentials');
    }
  }
}
