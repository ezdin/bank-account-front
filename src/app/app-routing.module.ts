import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OperationsComponent } from './operations/operations.component';
import { LoginComponent } from './login/login.component';
import { OperationsHistoryComponent } from './operations-history/operations-history.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'operations', component: OperationsComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'operationsHistory', component: OperationsHistoryComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
