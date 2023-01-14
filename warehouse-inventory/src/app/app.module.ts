import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// first import takes care of our ngforms and the second handles the form group and form buider
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Warehouse1Component } from './warehouse1/warehouse1.component';
import { MasterheaderComponent } from './masterheader/masterheader.component';
import { RegistrationComponent } from './registration/registration.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { AssociateComponent } from './associate/associate.component';
import { ManagerComponent } from './manager/manager.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Warehouse1Component,
    MasterheaderComponent,
    RegistrationComponent,
    NavigationComponent,
    FooterComponent,
    AssociateComponent,
    ManagerComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
