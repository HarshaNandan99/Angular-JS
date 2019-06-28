import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { TodopageComponent } from './todopage/todopage.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteguardService } from './service/routeguard.service';

import { TodoComponent } from './todo/todo.component';
import { TemplateComponent } from './template/template.component';

const routes: Routes = [
  
  { path: '' , component: LoginComponent  },
  { path: 'login' , component: LoginComponent  },
  { path:'welcome/:name', component: WelcomeComponent, canActivate:[RouteguardService]},
  { path: 'error', component: ErrorpageComponent, canActivate:[RouteguardService]},
  { path: 'todo', component: TodopageComponent, canActivate:[RouteguardService]},
  { path: 'logout', component: LogoutComponent, canActivate:[RouteguardService]},
  { path: 'todos/:email', component: TodoComponent, canActivate:[RouteguardService]},
  { path: 'template',component: TemplateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
