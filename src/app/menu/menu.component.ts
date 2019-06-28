import { Component, OnInit } from '@angular/core';
import { HardAuthentificationService } from '../service/hard-authentification.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
isUserLoggedIn: boolean=false;
  constructor(private hardcodedAuthentificationService: HardAuthentificationService ) { }

  ngOnInit() {
this.isUserLoggedIn=this.hardcodedAuthentificationService.isUserLoggedIn();
  }

}
