import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WishListService } from 'src/app/WhishList-Service/wish-list.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  pages:number =0;
  constructor( private service: WishListService, private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('https://glems-backend.herokuapp.com/products/amount').subscribe(res=>{
      this.pages =Number(res)
      this.pages = Math.round(this.pages/10)
    })
  }

  gotoTOp(page:number){
    document.body.classList.add('fixed')
    document.getElementById('loader2')?.classList.add('active')
    console.log('paggination '+page)

  }
  getArticle(page:number){
      this.gotoTOp(page)

    this.service.getArticle(page)
  }
}
