import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { environment as env } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class WishListService {
  articles:any=[];
  public articleSubject=new BehaviorSubject(this.articles);
  public articleObservable=this.articleSubject.asObservable();

  private stocklist:any[];
  private listofproductsinthecard;
  current;
  public product:any;

  private incartSubject;
  public incartObservable
  public incart:boolean;

  private productsubject;
  public productobservable;

  private sidebarsubject;
  public sibarobservable;
  toggleSidebar:boolean;

  private shopcartbarsubject;
  public shopcartobservable;
  toggleshopcart:boolean;

 private showProductSubject;
  public showProductobservable;
 toggleShowproduct:boolean;

 private productsLoaderSubject;
 public productsLoaderObservable;
 productLoader:boolean;

 public backendUrl = (!window.location.host.includes('localhost')?environment.baseurl: env.baseurl);
 resetStock(){
   this.stocklist=[]
   localStorage.setItem('cardshop1',JSON.stringify(this.stocklist))
   this.listofproductsinthecard.next(this.stocklist);
 }
  constructor(private http:HttpClient,) {
    if(localStorage.getItem('card')){
      localStorage.clear()
    }
    if(localStorage.getItem('card')){
      localStorage.clear()

    }
    if(localStorage.getItem('cardshop1')){
      this.stocklist= JSON.parse(localStorage.getItem('cardshop1')||"{}")
      console.log(`stock amount ${this.stocklist.length}`)
      this.listofproductsinthecard = new BehaviorSubject(this.stocklist)
      this.current = this.listofproductsinthecard.asObservable()
    }else{
      this.stocklist=[]
      console.log(`stock amount ${this.stocklist.length}`)
      localStorage.setItem('cardshop1',JSON.stringify(this.stocklist))
      this.listofproductsinthecard = new BehaviorSubject(this.stocklist)
      this.current = this.listofproductsinthecard.asObservable()
    }

    //sidebar
    this.toggleSidebar=false
    this.sidebarsubject = new BehaviorSubject(this.toggleSidebar)
    this.sibarobservable = this.sidebarsubject.asObservable()

    //in cart
    this.incart=false
    this.incartSubject = new BehaviorSubject(this.incart)
    this.incartObservable = this.incartSubject.asObservable()


    //sidebar
    this.toggleshopcart=false
    this.shopcartbarsubject = new BehaviorSubject(this.toggleshopcart)
    this.shopcartobservable = this.shopcartbarsubject.asObservable()

    //showproduct
    this.toggleShowproduct=false
    this.showProductSubject = new BehaviorSubject(this.toggleShowproduct)
    this.showProductobservable = this.showProductSubject.asObservable()

     //product
     this.product=null
     this.productsubject = new BehaviorSubject(this.product)
     this.productobservable = this.productsubject.asObservable()

     this.productLoader=false
     this.productsLoaderSubject = new BehaviorSubject(this.productLoader)
     this.productsLoaderObservable = this.productsLoaderSubject.asObservable()


     //product by page

     this.http.get<any>(this.backendUrl+'products/1').subscribe(res=>{
      this.articles = res.data
      this.articleSubject.next(this.articles)

    })
  }

  public getArticle(page:number){
    console.log('get articles ')
    this.http.get<any>(this.backendUrl+page).subscribe(  res=>{
      this.articles =   res.data
      console.log('get articles '+res.data)
      this.articleSubject.next(this.articles)
      if(document.body.scrollTop)
      document.body.scrollTop = 200; // For Safari
      if( document.documentElement.scrollTop)
      document.documentElement.scrollTop = 200;
    })
  }

  public handleSidebar(){
    this.toggleSidebar = !this.toggleSidebar
    this.sidebarsubject.next(this.toggleSidebar)
  }

  public handleShopcart(){
    this.toggleshopcart = !this.toggleshopcart
    this.shopcartbarsubject.next(this.toggleshopcart)
  }

  public handleShowProduct(product:any = this.product){
    this.toggleShowproduct = !this.toggleShowproduct
    this.showProductSubject.next(this.toggleShowproduct)
    this.product = product
    this.incart = this.isIncart(product)
    this.incartSubject.next(this.incart)
    this.productsubject.next(product)
    console.log(this.product,this.toggleShowproduct)
  }

  public  toggleToCart(item:any) {
    console.log(item)
    if (this.isIncart(item)) {
      this.stocklist.splice(this.getItemIndex(item),1)
      this.listofproductsinthecard.next(this.stocklist);

    }else{
      this.stocklist.push(item)
      this.listofproductsinthecard.next(this.stocklist);
    }

    localStorage.setItem('cardshop1',JSON.stringify(this.stocklist))
    console.log(this.stocklist)
  }

  public getItemIndex(item:any):number{
    return this.stocklist.map(object => object.productId).indexOf(item.productId)
  }

  public isIncart(item:any):boolean{
    return this.getItemIndex(item)>=0
  }

}
