import { Component, OnInit } from '@angular/core';
import { FormControl , Validators } from "@angular/forms";
import { MatSnackBar } from '@angular/material/snack-bar';
import { iTicketCoupon } from '../shared/models/iTicketCoupon';
import { TicketService } from '../shared/ticketing-service/ticket.service';

@Component({
  selector: 'app-create-tc',
  templateUrl: './create-tc.component.html',
  styleUrls: ['./create-tc.component.scss']
})
export class CreateTcComponent implements OnInit {

  ticketAmt:FormControl
  constructor(private tkService:TicketService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {

    this.ticketAmt = new FormControl('',Validators.required);
  }

  getErrorMessage() {
    if (this.ticketAmt.hasError('required')) {
      return 'Please enter the ticket Amount.';
    }
  }

  createTicket(){
    if(!this.ticketAmt.invalid){
      this.tkService.generateTicket(Number(this.ticketAmt.value)).then((resp:iTicketCoupon)=> {
        this._snackBar.open(`Barcode #${resp.barcode} generated.`, '✔', {
          duration: 3000,
        });
        console.log(resp);
        this.ticketAmt.reset();
      });
    }
    else{
      this.ticketAmt.markAsDirty();
      this.ticketAmt.markAsTouched();
      this.ticketAmt.updateValueAndValidity();
    }
  }

}
