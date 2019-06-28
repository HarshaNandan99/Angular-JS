import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardAuthentificationService {

  constructor() { }
    authenticate(username,password)
    {
     // console.log('before' +this.isUserLoggedIn())
      if(username==="Rahul"&& password==="1234")
      
      {
        sessionStorage.setItem('authenticaterUser',username);
     // console.log('after'+this.isUserLoggedIn());
        return true;
      }
      return false;
    }

    isUserLoggedIn()
    {
      let user =sessionStorage.getItem('authenticaterUser')
      return ! (user===null)
    }
logout()
{
  sessionStorage.removeItem('authenticaterUser')          
}
}
