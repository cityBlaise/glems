import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Product from './product';

@Component({
  selector: 'app-command-check',
  templateUrl: './command-check.component.html',
  styleUrls: ['./command-check.component.scss']
})
export class CommandCheckComponent implements OnInit {
  products:Product[]=[];

  command:any={}
  total:number=0
  constructor(
    private http:HttpClient,
    private route: ActivatedRoute,
  ) {

   }

  ngOnInit(): void {

    // https://glems-backend.herokuapp.com/products
    setTimeout(()=>{
      this.http.get<any>('https://glems-backend.herokuapp.com/commands/'+this.route.snapshot.paramMap.get('commandId'))
    .subscribe(
      response=>{
        setTimeout(()=>{

          this.products=response.products
          this.command = response.command
          this.total = this.products.map((d:Product )=> d.price).reduce(function(a:number, b:number)
                                {
                                  return a + b;
                                });
      }, 2000);

      }
    )

    },1000)
  }



}
