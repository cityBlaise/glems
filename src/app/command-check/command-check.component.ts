import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Product from './product';
import { environment as prod } from 'src/environments/environment.prod';
import { environment as env } from 'src/environments/environment';
@Component({
  selector: 'app-command-check',
  templateUrl: './command-check.component.html',
  styleUrls: ['./command-check.component.scss']
})
export class CommandCheckComponent implements OnInit {
  products:Product[]=[];
  public backendUrl = (!window.location.host.includes('localhost')?prod.baseurl: env.baseurl);
  public frontUrl = (!window.location.host.includes('localhost')?prod.frontUrl: env.frontUrl);

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
      this.http.get<any>(this.backendUrl+'commands/'+this.route.snapshot.paramMap.get('commandId'))
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
