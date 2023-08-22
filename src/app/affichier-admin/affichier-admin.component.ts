import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyDataService } from '../service/my-data.service';

@Component({
  selector: 'app-affichier-admin',
  templateUrl: './affichier-admin.component.html',
  styleUrls: ['./affichier-admin.component.css']
})
export class AffichierAdminComponent implements OnInit {
  tabAdmin:any;

  constructor(private mydataservice:MyDataService,private route:Router) { }

  ngOnInit(): void {
    let fetchRes=fetch('http://localhost:5000/getAdmin');
    fetchRes.then(res=>res.json()).then(d=>{console.log(d);this.tabAdmin=d})
  }
  deleteClient(admin :any ){
    this.mydataservice.deleteClient(admin._id).subscribe(data=>{
      this.tabAdmin=this.tabAdmin.filter((u:any)=> u!==admin)
      this.route.navigate(['/affichierAdmin']);
     

    })
  }

}
