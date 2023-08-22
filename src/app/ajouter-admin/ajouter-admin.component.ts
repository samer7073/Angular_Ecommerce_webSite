import { Component, OnInit } from '@angular/core';
import { Admin } from '../models/admin';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MyDataService } from '../service/my-data.service';

@Component({
  selector: 'app-ajouter-admin',
  templateUrl: './ajouter-admin.component.html',
  styleUrls: ['./ajouter-admin.component.css']
})
export class AjouterAdminComponent implements OnInit {
  admin :Admin;
  public tabAdmin:any;

  constructor(private mydataservice:MyDataService,private route:Router ) { 
    this.admin = new Admin();
    this.tabAdmin=Admin;
  }

  ngOnInit(): void {
    let fetchRes=fetch('http://localhost:5000/getAdmin');
    fetchRes.then(res=>res.json()).then(d=>{console.log(d);this.tabAdmin=d})
    console.log(this.tabAdmin);

  }
  onSubmit(form:NgForm){
    console.log(this.admin);
    if (form.valid) {
      if((this.mydataservice.nomExists(this.tabAdmin,this.admin.nom)== true) ){
        alert("nom exite deja ");
        location.reload();


      }else{
        alert('Formulaire soumis',);
        this.mydataservice.addAdmin(this.admin).subscribe((Data)=>{
          console.log(Data); })

      }
      
    } else {
      alert('Le formulaire est invalide');
      this.route.navigate(['affichierProduitAdmin']);
    }


  }
  

}
