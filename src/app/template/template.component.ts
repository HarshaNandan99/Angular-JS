import { Component, OnInit } from '@angular/core';
import { Todo } from '../todopage/todopage.component';
import { TododataService } from '../service/data/tododata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {


  temps: Todo[]
  constructor(
    private tempservice:TododataService,
    private router : Router
  ) { }

  ngOnInit() {
    this.tempservice.retrieveAllTodos()
    .subscribe(
      response =>
      {
        console.log(response);
        this.temps=response;
      }
    )
  }

}
