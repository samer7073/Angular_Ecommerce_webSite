import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { Commande } from 'src/app/models/commande';
import { Produit } from 'src/app/models/produit';
import { MyDataService } from 'src/app/service/my-data.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  public commande:Commande;
  public id_Client:any;
  public id_Produit :any ;
  public produit:Produit;
  public somme:any;
  public somme1:any;
  public Client :Client;
  public date:Date;

  constructor(private mydataservice:MyDataService,private url:ActivatedRoute,private route:Router) { 
    this.commande=new Commande();
    this.produit=new Produit();
    this.Client=new Client();
    this.date=new Date();
  }

  ngOnInit(): void {
    this.id_Client=this.url.snapshot.params['idC'];
    console.log(this.id_Client);
    this.id_Produit=this.url.snapshot.params['idP'];
    console.log(this.id_Produit);
    let fetchRes=fetch('http://localhost:5000/getProduit/'+this.id_Produit);
    fetchRes.then(res=>res.json()).then(d=>{console.log(d);this.produit=d})
    


    let fetchRes1=fetch('http://localhost:5000/getClient/'+this.id_Client);
    fetchRes1.then(res=>res.json()).then(d=>{console.log(d);this.Client=d})
    


  }

  
  onSubmit(form:NgForm){
    alert("commande passée avec succès");
    this.commande.client=this.id_Client;
    this.commande.produit=this.id_Produit;
    this.commande.dateC=this.date;
    console.log(this.commande)
    this.mydataservice.addCommande(this.commande).subscribe((Data)=>{
      console.log(Data);
    });
    this.somme=this.produit.qteProduit;
    this.somme1=this.commande.qteC;
    this.somme1=this.somme-this.somme1;
    this.produit.qteProduit=this.somme1;
    this.mydataservice.editProduit(this.produit,this.id_Produit).subscribe();
    if(this.produit.qteProduit==0){
      
      this.mydataservice.sendmail({to:"samerarfaoui2@gmail.com",subject:"prdouit en stock egale zero",html:"<b>il faut entrer enter nouvelle quantité </b><br><b>le produit   </b>"+this.produit.libProduit+"<b>  egale zero au stock</b>"}).subscribe(data=>{
        console.log(data)
      })
      this.mydataservice.sendmail({to:"samerarfaoui2@gmail.com",subject:"novelle commande",html:"<b>Id Client :</b>"+this.commande.client+"<br><b>Email Client :</b>"+this.Client.email+"<br><b>produit :</b>"+this.produit.libProduit+"<br><b>Quantité Commandée :</b>"+this.commande.qteC}).subscribe(data=>{
        console.log(data);
      })


    }
    if(this.produit.qteProduit>0){
      this.mydataservice.sendmail({to:"samerarfaoui2@gmail.com",subject:"novelle commande",html:"<b>Id Client :</b>"+this.commande.client+"<br><b>Email Client :</b>"+this.Client.email+"<br><b>produit :</b>"+this.produit.libProduit+"<br><b>Quantité Commandée :</b>"+this.commande.qteC}).subscribe(data=>{
        console.log(data);
      })

    }

    



    
    this.route.navigate(['affichierProduit']);

  }

}
