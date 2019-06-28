import { Component, OnInit } from '@angular/core';
import { TododataService } from '../service/data/tododata.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public email: string, public college:string, public dept: string, public domain: string,public eid: string,public firstname: string,public lastname: string, public password:string
  )
  {

  }
}

@Component({
  selector: 'app-todopage',
  templateUrl: './todopage.component.html',
  styleUrls: ['./todopage.component.css']
})
export class TodopageComponent implements OnInit {
todos:  Todo[]
message: string
  // new Todo(1, ' Learn to dance',false, new Date()),
  // new Todo(2, ' Learn Angular',false, new Date()),
  // new Todo(3, ' Learn Spring Boot',false, new Date())


  constructor(
    private todoservice:TododataService,
    private router : Router
  ) { }

  ngOnInit() {
   this.refreshUsers();
  }

  refreshUsers(){
    this.todoservice.retrieveAllTodos().subscribe(
      response=>
      {
        console.log(response);
        this.todos=response;
      }
    )
  }

  
deleteUser(email: string)
{
console.log(`delete todo ${email}`)
this.todoservice.deleteUserById(email).subscribe(
  response=>
  {
    console.log(response);
    this.message=`Delete of User $(email) succesful!`;
    this.refreshUsers();
  }
)
}


UpdateUser(email: string){
  console.log(`update ${email}`)
  this.router.navigate(['todos',email])
}


adduser(){
  this.router.navigate(['todos','h'])
}

registeruser(){
  this.router.navigate(['todo'])
}
}
