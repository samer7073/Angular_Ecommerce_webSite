import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produit } from '../models/produit';
import { Observable } from 'rxjs';
import { Client } from '../models/client';
import { Commande } from '../models/commande';
import { Admin } from '../models/admin';

@Injectable({
  providedIn: 'root'
})
export class MyDataService {
  baseUrl:String='http://localhost:5000/';

  constructor( private http:HttpClient) { }
  getData(){
    return this.http.get('http://localhost:5000/getClinet');
  }
  /*
   async postData(url = '', data :Produit) {
      // Default options are marked with *
      const response = fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'no-cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return (await response).json(); // parses JSON response into native JavaScript objects
  }
  */
 createProduit(Produit:any){
  return this.http.post(this.baseUrl+'postProduit',Produit);
 }
 addProduit(produit:Produit): Observable<any> {
  const headers = { 'content-type': 'application/json'}  
  const body=produit;
  console.log(body)
  return this.http.post(this.baseUrl + 'postProduit', body,{'headers':headers})
}

addClinet(client:Client): Observable<any> {
  const headers = { 'content-type': 'application/json'}  
  const body=client;
  console.log(body)
  return this.http.post(this.baseUrl + 'postClient', body,{'headers':headers})
}
addCommande(Commande:Commande): Observable<any> {
  const headers = { 'content-type': 'application/json'}  
  const body=Commande;
  console.log(body)
  return this.http.post(this.baseUrl + 'postCommande', body,{'headers':headers})
}
sendmail(mail:any){
  const headers = { 'content-type': 'application/json'}

  const body=mail;
  console.log(body)
  return this.http.post(this.baseUrl + 'api/sendemail', body,{'headers':headers})

  
}
addAdmin(Admin:Admin): Observable<any> {
  const headers = { 'content-type': 'application/json'}  
  const body=Admin;
  console.log(body)
  return this.http.post(this.baseUrl + 'postAdmin', body,{'headers':headers})
}




editProduit(produit:Produit ,id:any){
  return this.http.put(this.baseUrl+'majProduit/'+id,produit);
}
deleteProduit(id:any){
  return this.http.delete(this.baseUrl+'deleteProduit/'+id);
}
deleteClient(id:any){
  return this.http.delete(this.baseUrl+'deleteClinet/'+id);
}
editClient(clinet :any,id:any){
  return this.http.put(this.baseUrl+'majClient/'+id,clinet);
}
deleteCommande(id:any){
  return this.http.delete(this.baseUrl+'deleteCommande/'+id)
}
emailExists(table: Client[], email: any): boolean {
  return table.some(Client => Client.email === email);
}
nomExists(table: Admin[], nom: any): boolean {
  return table.some(Admin => Admin.nom === nom);
}

deleteAdmin(id:any){
  return this.http.delete(this.baseUrl+'deleteAdmin/'+id);
}



cinExists(table: Client[], cin: any): boolean {
  return table.some(Client => Client.cin === cin);
}




 getPasswordForEmail(clients: Client[], emailToSearch: string): string | undefined {
  const clientWithEmail = clients.find((client) => client.email === emailToSearch);

  if (clientWithEmail) {
    return clientWithEmail.motPass;
  } else {
    return undefined;
  }
}









}
//JSON.stringify(Produit);