import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-connecter',
  templateUrl: './connecter.component.html',
  styleUrls: ['./connecter.component.css']
})
export class ConnecterComponent implements OnInit {

   email:any ;
   motpass:any;
   tabClient:any;
   id_produit:any;
   id_client:any;
   public relod :boolean;
  constructor( private route:Router,private url:ActivatedRoute) { 
    this.relod=false;
  }

  ngOnInit(): void {
    
    

    
    
 
   
    this.id_produit=this.url.snapshot.params['id'];
    
    let fetchRes=fetch('http://localhost:5000/getClinet');
    fetchRes.then(res=>res.json()).then(d=>{console.log(d);this.tabClient=d})
    console.log(this.email,this.motpass)
  }
 
  verifier(){
    for(let i of this.tabClient){
      if(i.email==this.email   ){
        if(i.motPass==this.motpass){
          console.log(this.email);
          console.log(this.motpass);
          return this.route.navigate(['/commande/'+this.id_produit+'/'+i._id]);

        }else{
          return alert("Mot de passe incorrecte ")

        }

        
        
      }
        

      
      
      
      
     
      /*else{
         
        console.log(this.email);
        console.log(this.motpass);
        return alert("n exite pas ")
      }*/
    }
    return alert("n existe pas")
    
    
  }
  
 

}
