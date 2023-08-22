import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Client } from 'src/app/models/client';
import { ActivatedRoute,Router } from '@angular/router';
import { MyDataService } from 'src/app/service/my-data.service';

@Component({
  selector: 'app-editer-client-admin',
  templateUrl: './editer-client-admin.component.html',
  styleUrls: ['./editer-client-admin.component.css']
})
export class EditerClientAdminComponent implements OnInit {

  public client :Client;
  public client_id:any;
  public tableClient:any ;
  constructor(private url:ActivatedRoute,private mydataservice:MyDataService,
     private router:Router) {
    this.client=new Client();
   }

  ngOnInit(): void {
    this.client_id=this.url.snapshot.params['id'];
    let fetchRes=fetch('http://localhost:5000/getClient/'+this.client_id);
    fetchRes.then(res=>res.json()).then(d=>{console.log(d);this.tableClient=d})
    console.table(this.tableClient);
  }
  onSubmit(form:NgForm){
    this.mydataservice.editClient(this.client,this.client_id).subscribe();
    this.router.navigate(['/affichierClientAdmin']);

  }

}
