import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { TicketMetaData } from './mock';

const httpOptions = new HttpHeaders({ 'Content-Type': 'application/json' });

@Injectable({
  providedIn: 'root'
})
export class TicketService {

constructor(private httpService:HttpClient){}

async generateTicket(ticketAmount:Number){

    const bodyData = { "amount":ticketAmount,
                        "metadata": TicketMetaData()
                     };

    const barcodedata = await this.httpService.post('v1/generateTicket',JSON.stringify(bodyData),{ headers: httpOptions}).toPromise();
                            
   return new Promise((resolve,reject)=>{
    this.httpService.post('v1/ticketCouponList',barcodedata,{ headers: httpOptions}).toPromise().then((resp)=>{
        resolve(barcodedata);
    }).catch((ex)=>{
       reject(ex);
    });
   });  

}

searchTicket(ticketBarcode:string){
 return this.httpService.get('v1/ticketCouponList',{ headers: httpOptions,params:new HttpParams().set('barcode',ticketBarcode)}).toPromise();
}

getAllTicketCoupons(){
  return this.httpService.get('v1/ticketCouponList',{ headers: httpOptions}).toPromise();
}


private handleError (error: any) {
    console.error(error); 
    return throwError(error);
  }

} 