import { Component, OnInit } from '@angular/core';
import { MyDataService } from 'src/app/service/my-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-affichier-client-admin',
  templateUrl: './affichier-client-admin.component.html',
  styleUrls: ['./affichier-client-admin.component.css']
})
export class AffichierClientAdminComponent implements OnInit {

  tabClient:any;
  constructor(private mydataservice:MyDataService,private route:Router) { }

  ngOnInit(): void {
    let fetchRes=fetch('http://localhost:5000/getClinet');
    fetchRes.then(res=>res.json()).then(d=>{console.log(d);this.tabClient=d})
  }
  deleteClient(client :any ){
    this.mydataservice.deleteClient(client._id).subscribe(data=>{
      this.tabClient=this.tabClient.filter((u:any)=> u!==client)
      this.route.navigate(['/affichierClientAdmin']);
     

    })
  }

 
}
