import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchTcRoutingModule } from './search-tc-routing.module';
import { SearchTcComponent } from './search-tc.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { MatIconModule } from "@angular/material/icon";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [SearchTcComponent],
  imports: [
    CommonModule,
    SearchTcRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatAutocompleteModule,
    ReactiveFormsModule
  ]
})
export class SearchTcModule { }
