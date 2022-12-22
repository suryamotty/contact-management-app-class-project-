import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MyContact } from 'src/models/myContact';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl:string = 'http://localhost:3000/contacts'
  constructor(private http:HttpClient) { }

  //create  a function to get all contacts
  getallContacts():Observable<MyContact>{
   return  this.http.get(this.baseUrl)
  }

  //crating a function to view a particular contact
  viewContact(contactId:string){
   return  this.http.get(`${this. baseUrl}/${contactId}`)

  }

  //function for getting a particular groupname
  getGroupName(groupId:string){
   return this.http.get('http://localhost:3000/groups/'+groupId)
  }
}
