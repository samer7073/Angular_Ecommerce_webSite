import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/models/produit';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MyDataService } from 'src/app/service/my-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ajouter-produit',
  templateUrl: './ajouter-produit.component.html',
  styleUrls: ['./ajouter-produit.component.css']
})
export class AjouterProduitComponent implements OnInit {

  public produits:Produit ;
  constructor(private mydataservice:MyDataService,private route:Router) { 
    this.produits=new Produit();
  }

  ngOnInit(): void {
   // this.mydataservice.postData('http://localhost:5000/postProduit',this.produits)
    
  }
  onSubmit(from:NgForm){
   console.log(this.produits)
    //this.mydataservice.postData('http://localhost:5000/postProduit',this.produits)
   /*
     this.mydataservice.createProduit(this.produits.value).subscribe((data:any)=>{
     this.router.navigate(['/']);
   },
   error=>{
    alert(error)
   }
   );
   */
     try{

      this.mydataservice.addProduit(this.produits).subscribe(data=>{
        console.log(data)
        this.route.navigate(['/affichierProduitAdmin']);
        
      })
     }catch(error){
      console.log(error);
     }


  }


  //this.router.navigate(['/affichierClientAdmin']);
  

}
