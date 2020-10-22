import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchTcComponent } from './search-tc.component';

const routes: Routes = [{ path: '', component: SearchTcComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchTcRoutingModule { }
