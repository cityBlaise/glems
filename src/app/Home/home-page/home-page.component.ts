import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WishListService } from 'src/app/WhishList-Service/wish-list.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public shopCart:any[]=[];
  public products:any=[]
  ngOnInit() {


    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        if (document.body.scrollTop > 200  || document.documentElement.scrollTop > 200) {
          document.getElementById('gotop')?.classList.add('active')
        } else {
          document.getElementById('gotop')?.classList.remove('active')

        }
    }

    this.whis.articleObservable.subscribe(async res=>{
      this.products= await res
      setTimeout(async ()=>{
          document.body.classList.remove('fixed')
          if(!document.getElementById('loader')?.classList.contains('disabled')){
            setTimeout(async ()=>{
                document.getElementById('loader')?.classList.add('disabled')
            }, 6000);
          }else{
            document.getElementById('loader2')?.classList.remove('active')
          }
      }, 3000);
        // document.body.classList.remove('fixed')

    })
    // // https://glems-backend.herokuapp.com/products
    // if(Number(this.route.snapshot.paramMap.get('page'))>0 ){
    //   console.log(this.route.snapshot.paramMap.get('page'))
    //   setTimeout(()=>{
    //     this.http.get<any>('https://glems-backend.herokuapp.com/products/'+
    //     this.route.snapshot.paramMap.get('page')
    //     ).subscribe(res=>{
    //       const a=res;

    //       this.products = a.data
    //       console.log(this.products)
    //       document.body.classList.toggle('fixed')
    //       // setTimeout(()=>{
    //       //   }, 3000);
    //     })
    //   }, 3000);
    // }else{
    //   console.log(this.route.snapshot.paramMap.get('page'))
    //   setTimeout(()=>{
    //   this.http.get<any>('https://glems-backend.herokuapp.com/products').subscribe(res=>{
    //     const a=res;

    //     this.products = a
    //     console.log(this.products)
    //     document.body.classList.toggle('fixed')
    //     // setTimeout(()=>{
    //     //   }, 3000);
    //   })
    // }, 3000);
    // }


  }

  constructor(private whis:WishListService,private http:HttpClient,
    private route: ActivatedRoute){}
  addtocart(product:any){
    this.shopCart.push(product)
    console.log(this.shopCart)
  }

  removeFromCart(product:any){
    this.shopCart.splice(this.shopCart.indexOf(product),1)
    console.log(this.shopCart)
  }

  gotop(){
    if(document.body.scrollTop)
    document.body.scrollTop = 200; // For Safari
    if( document.documentElement.scrollTop)
    document.documentElement.scrollTop = 200;
  }

}
