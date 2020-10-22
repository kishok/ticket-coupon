import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { map, startWith } from 'rxjs/operators';
import { iTicketCoupon } from '../shared/models/iTicketCoupon';
import { TicketService } from '../shared/ticketing-service/ticket.service';

@Component({
  selector: 'app-search-tc',
  templateUrl: './search-tc.component.html',
  styleUrls: ['./search-tc.component.scss']
})
export class SearchTcComponent implements OnInit {

  ticketBarcode:FormControl
  barcodeData:iTicketCoupon[];
  filiteredbarcodeList:Observable<iTicketCoupon[]>;
  barcodeList:iTicketCoupon[];
  constructor(private tkService:TicketService) { }

  async ngOnInit(): Promise<void> {
    this.ticketBarcode = new FormControl('',Validators.required);
    this.barcodeList = await this.tkService.getAllTicketCoupons() as iTicketCoupon[];
    this.filiteredbarcodeList = this.ticketBarcode.valueChanges
    .pipe(
      startWith(''),
      map(barcode => barcode ? this._filterStates(barcode) : this.barcodeList.slice())
    );
  }

  private _filterStates(value: string): iTicketCoupon[] {
    const filterValue = value ? value.toLowerCase():'';

    return this.barcodeList.filter(item => item.barcode.toString().toLowerCase().indexOf(filterValue) === 0);
  }

  getErrorMessage() {
    if (this.ticketBarcode.hasError('required')) {
      return 'Please enter the barcode.';
    }
  }

  async searchTicket(){
    if(!this.ticketBarcode.invalid){
      this.barcodeData =  await this.tkService.searchTicket(this.ticketBarcode.value) as iTicketCoupon[];
      this.ticketBarcode.reset();
    }
    else{
      this.ticketBarcode.markAsDirty();
      this.ticketBarcode.markAsTouched();
      this.ticketBarcode.updateValueAndValidity();
    }
  }

}
