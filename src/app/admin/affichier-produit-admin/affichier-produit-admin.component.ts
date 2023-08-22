import { Component, OnInit } from '@angular/core';
import { MyDataService } from 'src/app/service/my-data.service';

@Component({
  selector: 'app-affichier-produit-admin',
  templateUrl: './affichier-produit-admin.component.html',
  styleUrls: ['./affichier-produit-admin.component.css']
})
export class AffichierProduitAdminComponent implements OnInit {
  tableProduit:any;

  constructor(private mydataservice:MyDataService) { }

  ngOnInit(): void {
    let fetchRes=fetch('http://localhost:5000/getProduit');
    fetchRes.then(res=>res.json()).then(d=>{console.log(d);this.tableProduit=d})
  }
  deleteProduit(produit:any){
    this.mydataservice.deleteProduit(produit._id).subscribe(data=>{
      this.tableProduit=this.tableProduit.filter((u:any)=> u !== produit)
    })
  }

}
