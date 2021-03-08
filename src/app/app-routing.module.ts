import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { BalanceComponent } from './pages/balance/balance.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent
  },
  {
    path: 'balance',
    component: BalanceComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
