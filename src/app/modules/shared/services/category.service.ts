import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

const base_url = environment.base_url
//sconst base_url = "http://localhost:8080/api/almace-service";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  /**
   * HttpCliente nos permite mantener conectados los diferentes
   * metodos http para poder conectar al back
   * @param http
   */
  constructor(private http: HttpClient) { }

  /**
   * GetAllCategories
   */
  getCategories(){
    const  endpoint =`${base_url}/getProducts`;
    return this.http.get(endpoint);
  }
}
