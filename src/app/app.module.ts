import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { TodopageComponent } from './todopage/todopage.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { HttpClientModule } from '@angular/common/http';

import { TodoComponent } from './todo/todo.component';
import { TemplateComponent } from './template/template.component';

@NgModule({
  declarations: [
     AppComponent,
    LoginComponent,
    WelcomeComponent,
    ErrorpageComponent,
    TodopageComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
   
    TodoComponent,
   
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
