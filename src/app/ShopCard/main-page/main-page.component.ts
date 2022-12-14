import { Component, OnInit } from '@angular/core';
import { WishListService } from 'src/app/WhishList-Service/wish-list.service';
import { v4 as uuidv4 } from 'uuid';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import Product from 'src/app/command-check/product';

@Component({
  selector: 'shopcart',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  total:number=0
  products:any[]=[];
   public active:boolean=false;
  constructor(
    private route: Router,private cardList:WishListService, private http:HttpClient) {

  }

  ngOnInit(): void {
    this.cardList.current.subscribe(async list=>{
      this.products=  list
      if (this.products.length>0) {

        this.total = this.products.map((d:Product )=> d.price).reduce(function(a:number, b:number)
                                  {
                                    return a + b;
                                  });
      }
    })
    this.cardList.shopcartobservable.subscribe(active=> this.active = active)
  }

  handlecart(event:Event,product:any) {
    event.stopPropagation()
    this.cardList.toggleToCart(product)
    if (this.products.length>0) {

      this.total = this.products.map((d:Product )=> d.price).reduce(function(a:number, b:number)
                                  {
                                    return a + b;
                                  });
    }else{
      this.total=0
    }
    console.log("product l "+this.total)
  }

  close(){
    this.cardList.handleShopcart()
    document.body.classList.toggle('fixed')

  }

  doNothing(event:Event){
    event.stopPropagation()
    event.preventDefault()
  }

  order() {
    const commandId =uuidv4()

    const commande={
      commandId:commandId,
      date: new Date().toString(),
      products: this.products.map(object => object.productId),
      status:'pending'

    }
    this.http.post<any>('https://glems-backend.herokuapp.com/commander',commande)
    .subscribe(
      res=>{
        this.cardList.handleShopcart()
        console.log(res)
        this.cardList.resetStock()
        this.route.navigateByUrl("/command/"+commandId)
    })
    // window.location.href = "https://api.whatsapp.com/send/?phone=237696173340&text=https://glems.herokuapp.com/command"+commandId
  }
}
