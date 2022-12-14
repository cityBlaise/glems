import { Component, OnInit } from '@angular/core';
import { WishListService } from 'src/app/WhishList-Service/wish-list.service';
@Component({
  selector: 'showproduct',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  public product:any=null;
  public active:boolean=true;
  public incart:boolean=false;


  constructor(private whislist: WishListService ) {

  }

  ngOnInit(): void {
    this.whislist.showProductobservable.subscribe(active=> {
      this.active = active
    })
    this.whislist.productobservable.subscribe(product=>{
       this.product = product
       this.incart = this.whislist.incart
      })
  }

  close(event:Event){
    // document.body.firstElementChild?.classList.toggle('fixed')
    document.body.classList.toggle('fixed')
    event.stopPropagation()
    this.whislist.handleShowProduct()
    console.log('active '+this.active)
  }

  handlecart(event:Event ) {
    event.stopPropagation()
    this.incart = !this.incart
    this.whislist.toggleToCart(this.product)
  }

  doNothing(event:Event){
    event.stopPropagation()
  }
}
