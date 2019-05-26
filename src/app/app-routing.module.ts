import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountingComponent } from './accounting/accounting.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: 'accounting', component: AccountingComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
