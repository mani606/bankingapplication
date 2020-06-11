import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }
  /**
   * @description This method validates user login
   * param url,email,password
   */
    validateLogin = (url, email, password) => {
         return this.http.get(url + "?email=" + email + "&password=" + password);
    }
     /**
    * @description This method fetches data for a given url
    * @param url
    */
    getData = (url) => {
      return this.http.get(url);
    }
     /**
    * @description This method fetches data by user for a given url
    * @param url,email
    */
    getDataByUser = (url,email) => {
      return this.http.get(url+"?userEmail="+email);
      }
      /**
    * @description This method add data 
    * @param url
    * @param postObj
    */
    addData = (url, postObj) => {
      return this.http.post(url, postObj);
    }
    /**
    * @description This method updates data 
    * @param url
    * @param putObj
    */
    updateData = (url, putObj) => {
      return this.http.put(url, putObj);
    }
    /**
    * @description This method deletes data 
    * @param id
    */
    deleteData = (id) => {
      return this.http.delete(id);
    }
  }
  