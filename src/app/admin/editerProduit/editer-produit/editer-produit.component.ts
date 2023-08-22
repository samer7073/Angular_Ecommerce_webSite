import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/models/produit';
import { MyDataService } from 'src/app/service/my-data.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-editer-produit',
  templateUrl: './editer-produit.component.html',
  styleUrls: ['./editer-produit.component.css']
})
export class EditerProduitComponent implements OnInit {
 
  tableProduit:any ;
  public produits:Produit ;
  produit_id:any;
  
 
  constructor(private mydataservice:MyDataService, private url:ActivatedRoute, private router:Router) { 
    this.produits=new Produit();

  }

    ngOnInit(): void {
    this.produit_id=this.url.snapshot.params['id'];
    console.log(this.produit_id);

    let fetchRes=fetch('http://localhost:5000/getProduit/'+this.produit_id);
    fetchRes.then(res=>res.json()).then(d=>{console.log(d);this.tableProduit=d})
    console.table(this.tableProduit);
    
  

   
    
  }
  edit(){
    this.mydataservice.editProduit(this.produits,this.produit_id).subscribe((data :any)=>{
      console.log(data);
      

    },error=>{
      console.log(error);
    })
    console.log(this.produits)
  }

  onSubmit(from:NgForm){
    console.log(this.produits);

    
     this.mydataservice.editProduit(this.produits,this.produit_id).subscribe();
     this.router.navigate(['/affichierProduitAdmin']); 
     



     /*
    this.mydataservice.editProduit(this.produits,this.produit_id).subscribe((data :any)=>{
      console.log(data);
      
      

    },error=>{
      console.log(error);
    })



    //this.router.navigate(['/affichierProduitAdmin']); 
    */

  }
  

}
//+this.produit_id