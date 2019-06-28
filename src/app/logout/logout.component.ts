import { Component, OnInit } from '@angular/core';
import { HardAuthentificationService } from '../service/hard-authentification.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private hardcodedAuthentificationService:HardAuthentificationService ) { }

  ngOnInit() {
    this.hardcodedAuthentificationService.logout();
  }

}
