import { Component, Input, OnInit} from '@angular/core';
import { WishListService } from 'src/app/WhishList-Service/wish-list.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input()
  public product:any;


  public incart:boolean=false;

  constructor(private stock: WishListService) {
  }

  ngOnInit(): void {
     this.stock.current.subscribe(products=>{ 
      this.incart = this.stock.isIncart(this.product)
     })
  }

  handlecart(event:Event ) {
    event.stopPropagation()
    this.incart = !this.incart
    this.stock.toggleToCart(this.product)
  }

  stopProp(event:Event){
    event.stopPropagation()
  }

  showProduct( ){
    // document.body.firstElementChild?.classList.toggle('fixed')
    document.body.classList.toggle('fixed')
    console.log('show product '+this.product)
    this.stock.handleShowProduct(this.product)
  }
}
