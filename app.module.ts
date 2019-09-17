import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontComponent } from './pages/front/front.component';
import {HttpClientModule} from '@angular/common/http';
import { from } from 'rxjs';
import { ConfirmComponent } from './pages/confirm/confirm.component';
@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    ConfirmComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
