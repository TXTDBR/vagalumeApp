import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class HotspotsService {
  URL:string = "https://api.vagalume.com.br/";
  KEY:string = "b40e920ce9557074f6204d08dc0df4b9";

  constructor(private http: HttpClient) { }

  public getHotSpot(param:string):any{
   return this.http.get(`${this.URL}${param}apikey=${this.KEY}`);
  }

  public getMusicById(param){
    return this.http.get(`${this.URL}search.php?apikey=${this.KEY}&musid=${param}`);
  }
}
