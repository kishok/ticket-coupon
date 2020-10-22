/// <reference types="cypress" />
import 'zone.js/dist/zone-testing';
import { getTestBed,waitForAsync } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { iTicketCoupon } from '../models/iTicketCoupon';
import { TicketService } from './ticket.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryStore } from '../mock-server/in-memory-store.service';


let tktService: TicketService;
let barcodeVal:any;
const amt = 1000;

before(() => {
  // Init Angular stuff

  getTestBed().resetTestEnvironment();

  getTestBed().initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  )

  getTestBed().configureTestingModule({
    imports:[ HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryStore, {passThruUnknownUrl: true,apiBase:'v1/'})
    ],
    providers:[{ provide:TicketService,
                 useClass:TicketService,
                 deps:[HttpClient]
               }]
  });

  tktService = getTestBed().inject(TicketService);
});

describe('Unit Test the Ticket Service',()=>{
  it('can barcode generated',waitForAsync(()=>{
   
    tktService.generateTicket(amt).then((resp:iTicketCoupon)=>{
       assert.isNotNull(resp,"Response is not NULL");
       assert.isObject(resp,"Response is an Object");
       expect(resp.barcode,'Response have the Barcode value').to.exist;
       assert.isNumber(resp.barcode,'Barcode is Numeric');
       expect(resp.amount,'Amount is equal').to.equal(amt);
       expect(resp,'Response have all Barcode details').to.have.keys('barcode', 'amount','effectiveDate','status','location')
       barcodeVal = resp.barcode;
    });
  }));

  it('is barcode found',waitForAsync(()=>{
    tktService.searchTicket(barcodeVal).then((resp:iTicketCoupon[])=>{
      const data = resp[0];
       assert.isNotNull(data,"Response is not NULL");
       assert.isObject(data,"Response is an Object");
       expect(data.barcode,'Response have the Barcode value').to.exist;
       expect(data.barcode,'Barcode is found and the same').to.equal(barcodeVal);
       assert.isNumber(data.barcode,'Barcode is Numeric');
       expect(data.amount,'Amount is equal').to.equal(amt);
    });
  }));

  it('get All barcodes',waitForAsync(()=>{   
    tktService.getAllTicketCoupons().then((resp:iTicketCoupon[])=>{
       assert.isNotNull(resp,"Response is not NULL");
       assert.isArray(resp,"Response is an Array");
    });
  }));
});