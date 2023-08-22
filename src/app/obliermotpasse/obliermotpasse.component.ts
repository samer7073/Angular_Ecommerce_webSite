import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../models/client';
import { MotPassOblier } from '../models/mot-pass-oblier';
import { MyDataService } from '../service/my-data.service';

@Component({
  selector: 'app-obliermotpasse',
  templateUrl: './obliermotpasse.component.html',
  styleUrls: ['./obliermotpasse.component.css']
})
export class ObliermotpasseComponent implements OnInit {
  tabClient:Client [];
  login:MotPassOblier;
  public id_produit:any ;

  constructor(private mydataservice:MyDataService,private route:Router,private url:ActivatedRoute) {
    this.login=new MotPassOblier();
   }

  ngOnInit(): void {
    this.id_produit=this.url.snapshot.params['idP'];
    let fetchRes=fetch('http://localhost:5000/getClinet');
    fetchRes.then(res=>res.json()).then(d=>{console.log(d);this.tabClient=d})
    //this.login.email="samerarfaoui2@gmail.com"
    

  }
  onSubmit(form:NgForm){
   
    if(this.mydataservice.emailExists(this.tabClient,this.login.email)){
      alert(" un mail deja envoyé vérifier ton adresse mail ")
      this.mydataservice.sendmail({to:this.login.email,subject:"Mot de passe Oblier",html:"votre Mot Passe Est :"+this.mydataservice.getPasswordForEmail(this.tabClient,this.login.email)}).subscribe(data=>{
        console.log(data)
      })
      this.route.navigate(['/connecter/'+this.id_produit]);

    }else{
      alert ("aucun utlisateur avec cette adrres mail");
      location.reload();
    }
    
    
    


  }
  

}
