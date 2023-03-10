import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { Warehouse1Component } from './warehouse1/warehouse1.component';
import { AssociateComponent } from './associate/associate.component';
import { ManagerComponent } from './manager/manager.component';

const routes: Routes = [

  {
    path: '',
    component: LoginComponent
  },
  {
  path: 'register',
  component: RegistrationComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'warehouse1',
    component: Warehouse1Component
  },
  {
    path: 'associate',
    component:AssociateComponent
  },
  {
    path: 'manager',
    component:ManagerComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
