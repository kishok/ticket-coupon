import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import faker from 'faker';

export class InMemoryStore implements InMemoryDbService {
  createDb() {
    let ticketCouponList = [];
    return { ticketCouponList};
  }

  post(reqInfo:RequestInfo){

    if(reqInfo.collectionName === 'generateTicket'){
      return this.ticketGenerator(reqInfo);
    }
  }

  // Overrides id generator and delivers next available `id`, starting with 1001.
  genId<T extends { id: any }>(collection: T[], collectionName: string): any {
      return guid();
  }

  private ticketGenerator(reqInfo:RequestInfo){

    return reqInfo.utils.createResponse$(()=>{
      console.log('fake barcode generation');

      const { headers, url , req } = reqInfo;

      const postData:any = JSON.parse(req['body']);

      var array = new Uint32Array(1);

      if(!isNaN(postData.amount) && postData.metadata && postData.metadata.version == 1){
      return {
        status:200,
        headers,
        body:{ 
          "barcode" : window.crypto.getRandomValues(array)[0],
		      "amount"  : postData.amount,
		      "effectiveDate" : faker.date.future(),
          "status": faker.random.arrayElement(["1","0"]),
          "location": faker.address.city()
          }
        }
      }
      

      return {
        status : 500,
        headers,
        url,
        body: {}
      }

    })

  }



}

// Pseudo guid generator
function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}