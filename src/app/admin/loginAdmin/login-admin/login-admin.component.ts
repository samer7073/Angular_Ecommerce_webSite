import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  public nom:any;
  public motpass:any;
  public tabAdmin:any;

  constructor( private route:Router) { }

  ngOnInit(): void {
    let fetchRes=fetch('http://localhost:5000/getAdmin');
    fetchRes.then(res=>res.json()).then(d=>{console.log(d);this.tabAdmin=d})
  }
  verifier(){
    for(let i of this.tabAdmin){
      if(i.nom==this.nom  ){
        if( i.motPass==this.motpass){
          console.log(this.nom);
          console.log(this.motpass);
          return this.route.navigate(['affichierProduitAdmin']);

        }else{
          return alert("mot de passe incorrecte ")

        }

        
        
      }
     
    
    }
    return alert ("n'existe pas ");
     
  }

}
