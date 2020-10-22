import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{ path: 'create-ticket', loadChildren: () => import('./create-tc/create-tc.module').then(m => m.CreateTcModule) },
{ path: 'search-ticket', loadChildren: () => import('./search-tc/search-tc.module').then(m => m.SearchTcModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
