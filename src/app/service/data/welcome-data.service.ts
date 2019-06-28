import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http:HttpClient) { }

  executeHelloWorldBeanService()
  {
  return  this.http.get('https://mobapp.eaiesb.com/mobapp/viewallemployees')
    //console.log("Execute Hello World Bean Service")
  }

}
