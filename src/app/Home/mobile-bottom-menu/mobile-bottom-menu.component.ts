import { Component, Input, OnInit } from '@angular/core';
import { WishListService } from 'src/app/WhishList-Service/wish-list.service';

@Component({
  selector: 'app-mobile-bottom-menu',
  templateUrl: './mobile-bottom-menu.component.html',
  styleUrls: ['./mobile-bottom-menu.component.scss']
})
export class MobileBottomMenuComponent implements OnInit {
  cartItemAmount:number=0;
  constructor(private stock: WishListService) {

  }

  ngOnInit(): void {
    this.stock.current.subscribe(list=> this.cartItemAmount = list.length)
  }

  handlesidebar()
  {
    document.body.classList.toggle('fixed')
    this.stock.handleSidebar()
  }

  handleshopcart()
  {
    document.body.classList.toggle('fixed')
    this.stock.handleShopcart()
  }
}
