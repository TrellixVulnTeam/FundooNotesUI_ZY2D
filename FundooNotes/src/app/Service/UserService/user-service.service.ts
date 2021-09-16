import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpServiceService } from '../HttpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpService:HttpServiceService) {
    
   }

  Register(data:any){
      const params={
        FirstName : data.firstName,
        LastName : data.lastName,
        Email :data.email,
        Password : data.password,
      }
      return this.httpService.post(`${environment.baseUrl}/api/register`,params);
    }
}
