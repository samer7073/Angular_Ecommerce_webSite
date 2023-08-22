import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-affichier-produit',
  templateUrl: './affichier-produit.component.html',
  styleUrls: ['./affichier-produit.component.css']
})
export class AffichierProduitComponent implements OnInit {
  tableProduit:any ;

  constructor() { }

  ngOnInit(): void {
    let fetchRes=fetch('http://localhost:5000/getProduit');
    fetchRes.then(res=>res.json()).then(d=>{console.log(d);this.tableProduit=d})
  }


}
