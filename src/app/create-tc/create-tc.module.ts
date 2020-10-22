import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateTcRoutingModule } from './create-tc-routing.module';
import { CreateTcComponent } from './create-tc.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [CreateTcComponent],
  imports: [
    CommonModule,
    CreateTcRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ]
})
export class CreateTcModule { }
