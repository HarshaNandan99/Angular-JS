import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardAuthentificationService } from '../service/hard-authentification.service';
import { TododataService } from '../service/data/tododata.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  x: string;
  y: string;
  body = '{"email": " '+this.x+'"," password": " '+this.y+' "}';
email='rahul@gmail.com'
  username= 'Rahul'
  password='1234'
  errormessage='Invalid Credentials'
  invalidcredentials=false
  
  data: any;
  
  
  constructor(private todoservice:TododataService,private router: Router, private hardcodedAuthentificationService: HardAuthentificationService) { }

  ngOnInit() {
  } 
  loginpagemethod()
  {
    console.log(this.username);
    console.log(this.password);
    if(this.hardcodedAuthentificationService.authenticate(this.username,this.password))
    {
      this.router.navigate(['welcome', this.username])
  this.invalidcredentials=false
  
    }else
    {
     
      this.invalidcredentials=true
    }
  }

  
loginpagemethod2()
{
  // console.log(this.email);
  // console.log(this.password);

this.data.email=this.email
this.data.password=this.password

console.log(this.data.email);
console.log(this.data.password);

  if(this.todoservice.login(this.data))
  {
    console.log(this.data.email);
    this.router.navigate(['welcome', this.data.email]);
    console.log(this.data.email);
    this.invalidcredentials=false;
    console.log(this.data.email)
  }
  else{
    
    this.invalidcredentials=true
  }
}


loginmethod2()
{
  this.x=this.email;
  this.y=this.password;
  this.body = "{email:"+this.x+",password:"+this.y+"}";

  console.log(this.body);

  this.todoservice.login(this.body).subscribe(response=>
    {
      if(response==1)
      {
        console.log(this.body);
        this.router.navigate(['welcome',this.email]);
        console.log(this.body);
        this.invalidcredentials=false;
        console.log(this.body)
      }
      else{
        this.invalidcredentials = true
      }
    }
  )
  }


}
