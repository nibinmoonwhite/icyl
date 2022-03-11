import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { posts } from './model/model';

// export interface iuser {
//   id: number;
//   name: string;
//   user_designation: number;
//   designationname: string;
// }

export interface iage {
  id: number;
  age: string
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl: any;
  constructor(private http:HttpClient)  {
    this.baseUrl = environment.baseUrl
   }


  addform(data:any){
    return this.http.post(this.baseUrl + 'api/addform/',data)
  }


  Listevents(): Observable<any>{
  return this.http.get<any>(this.baseUrl+'api/listevents/');
  }

  // ListageGroup(): Observable<iage[]>{
  //   return this.http.get<iage[]>(this.baseUrl+'api/listagegroup/');
  //   }

  ListageGroup(): Observable<any>{
      return this.http.get<any>(this.baseUrl+'api/listagegroup/');
  }
  
  ListVideo(): Observable<any>{
      return this.http.get<any>(this.baseUrl+'api/listvideo/');
      }
  Getvideobyid(id: any){
        return this.http.get(this.baseUrl + 'api/listvideobyid/' + id + '/',);
        }
  
      
  ListBanners(): Observable<posts[]>{
        return this.http.get<posts[]>(this.baseUrl+'api/listbanners/');
        }

ListBannerindex(): Observable<any>{
          return this.http.get<any>(this.baseUrl+'api/listbanners/');
          }

  Getbanner(id: any){
          return this.http.get(this.baseUrl + 'api/listbanner/' + id + '/',);
          }


  ListPrayers(): Observable<any>{
          return this.http.get<any>(this.baseUrl+'api/listprayers/');
          }

  ListCommittee(): Observable<any>{
            return this.http.get<any>(this.baseUrl+'api/listcommittee/');
            }
  ListCard(): Observable<any>{
              return this.http.get<any>(this.baseUrl+'api/listcard/');
              }

  Listevent(id: any): Observable<any> {
                return this.http.get<any>(this.baseUrl + 'api/listevent/' + id + '/');
              }
}