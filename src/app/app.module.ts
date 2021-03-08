import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { HeaderComponent } from './layouts/header/header.component';
import { RegisterComponent } from './pages/register/register.component';
import { BalanceComponent } from './pages/balance/balance.component';
import { ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    BalanceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule ,
    BrowserAnimationsModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
