import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { MyDataService } from 'src/app/service/my-data.service';

@Component({
  selector: 'app-ajouter-client',
  templateUrl: './ajouter-client.component.html',
  styleUrls: ['./ajouter-client.component.css']
})
export class AjouterClientComponent implements OnInit {

  public client:Client;
  public id_produit:any ;
  public tabClient:any;
  
  conf:any;
  constructor(private mydataservice:MyDataService,private route:Router,private url:ActivatedRoute) {

    this.client= new Client();
    this.tabClient=Client;
    
   }

  ngOnInit(): void {
    this.id_produit=this.url.snapshot.params['idP'];
    
   
    let fetchRes=fetch('http://localhost:5000/getClinet');
    fetchRes.then(res=>res.json()).then(d=>{console.log(d);this.tabClient=d})
    console.log(this.tabClient);
    
  }
  onSubmit(from:NgForm){

    console.log(this.client);
    if (from.valid) {
      if((this.mydataservice.emailExists(this.tabClient,this.client.email)== true) || (this.mydataservice.cinExists(this.tabClient,this.client.cin)==true)){
        alert("Cin ou email  exite deja ");
        location.reload();


      }else{
        alert('Formulaire soumis',);
        this.mydataservice.addClinet(this.client).subscribe((Data)=>{
          console.log(Data); })
          this.route.navigate(['/connecter/'+this.id_produit]);

      }
      
    } else {
      alert('Le formulaire est invalide');
      location.reload();
    }
    /*
    if(this.mydataservice.emailExists(this.tabClient,this.client.email)){
      alert("Cin exite deja ");
      location.reload();
    }else{
      this.mydataservice.addClinet(this.client).subscribe((Data)=>{
        console.log(Data); })
        
        
    
        
    
       this.route.navigate(['/connecter/'+this.id_produit]);
    

    }
    */
    
    
    
   
  }

}
