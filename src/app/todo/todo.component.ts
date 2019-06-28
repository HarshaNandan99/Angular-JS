import { Component, OnInit } from '@angular/core';
import { TododataService } from '../service/data/tododata.service';
import { Todo } from '../todopage/todopage.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  email:string
  todo: Todo

  constructor(
    private todoservice: TododataService,
    private route: ActivatedRoute,
    private router: Router
  ) { } 
  ngOnInit() {
    this.email = this.route.snapshot.params['email'];

    this.todo=new Todo(this.email,'',	'',	'',	'','','',	'');  
    
    if(this.email != 'h'){
    this.todoservice.retrieveUserById(this.email)
    .subscribe(
      data => this.todo = data
    )
    }
  }

  saveTodo(){
    if(this.email == 'h'){
      this.todoservice.createTodo(this.todo)
      .subscribe(
        data => {
        console.log(data)
        this.router.navigate(['todos'])
        }
      )
    }else{
     this.todoservice.updateTodo(this.todo,this.email)
     .subscribe(
       data => {
         console.log(data)
         this.router.navigate(['todos'])
       }
     )
    }
    

    this.todoservice.updateTodo(this.todo,this.email,)
    .subscribe(
      data => {
      console.log(data)
      this.router.navigate(['todo'])
      }
    )
  }
}

