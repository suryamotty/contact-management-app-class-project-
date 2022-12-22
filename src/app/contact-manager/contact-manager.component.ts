import { Component ,OnInit} from '@angular/core';
import { ApiService } from '../services/api.service';
import { MyContact } from 'src/models/myContact';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent implements OnInit{

    allContacts:MyContact[]=[]

    constructor(private api:ApiService) { }
    ngOnInit(): void {
     this.api.getallContacts() .subscribe((data:any)=>{
      console.log(data);
      this.allContacts = data
      
     })
    }
}
