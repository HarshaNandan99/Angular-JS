import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/todopage/todopage.component';

@Injectable({
  providedIn: 'root'
})
export class TododataService {

  constructor(
    private http:HttpClient
  ) { }

retrieveAllTodos()
{
  return this.http.get<Todo[]>('http://localhost:8080/viewallemployees/');
}



deleteUserById(email: string)
{
  return this.http.delete(`http://localhost:8080//deleteemployee/${email}`);
}

retrieveUserById(email: string)
{
  return this.http.get<Todo>(`http://localhost:8080//viewemployeebyid/${email}`);
}

updateTodo(todo: Todo,email: string)
{
  return this.http.put(
    `http://localhost:8080//updateemployee/${email}`, todo);
}

createTodo(todo: Todo){
  return this.http.post(`http://localhost:8080//addemployee/`,todo );
}

login(data: String)
{
  return this.http.post(`http://localhost:8080//login/`,data );

}

}
