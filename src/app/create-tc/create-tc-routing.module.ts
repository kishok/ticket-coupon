import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateTcComponent } from './create-tc.component';

const routes: Routes = [{ path: '', component: CreateTcComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateTcRoutingModule { }
