import { Component, OnInit } from '@angular/core';
import { MyDataService } from 'src/app/service/my-data.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  tabClient:any;

  constructor(private mydataservice:MyDataService) { }

  ngOnInit(): void {



    /*
      this.mydataservice.getData().subscribe((data)=>{
      this.tabClient=data;
      console.log(this.tabClient);
    })
    */




    /*
    fetch('http://localhost:5000/getClinet')
    .then(res=>{
      if(res.ok){console.log('succes')}
      else{console.log('not successful')}
    })
    .then((data)=>{this.tabClient=data})
    .catch(error => console.log('error'))  
*/
    //http://localhost:5000/getClinet
    let fetchRes=fetch('http://localhost:5000/getClinet');
    fetchRes.then(res=>res.json()).then(d=>{console.log(d);this.tabClient=d})



  }

}
