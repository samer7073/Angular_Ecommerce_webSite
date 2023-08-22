import { Component, OnInit } from '@angular/core';
import { MyDataService } from 'src/app/service/my-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-affichier-commande-admin',
  templateUrl: './affichier-commande-admin.component.html',
  styleUrls: ['./affichier-commande-admin.component.css']
})
export class AffichierCommandeAdminComponent implements OnInit {
  tabCommande:any;

  constructor(private mydataservice:MyDataService,private route:Router) { }

  ngOnInit(): void {
    let fetchRes=fetch('http://localhost:5000/getCommande');
    fetchRes.then(res=>res.json()).then(d=>{console.log(d);this.tabCommande=d})
    console.log(this.tabCommande.produit.libProduit)
  }
  deleteCommande(commande:any){
    this.mydataservice.deleteCommande(commande._id).subscribe(data=>{
      this.tabCommande=this.tabCommande.filter((u:any)=> u!==commande)
    })


  }

}
