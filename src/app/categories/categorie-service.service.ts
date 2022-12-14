import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment as prod } from 'src/environments/environment.prod';
import { environment as env } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CategorieServiceService  implements OnInit {
  categories:any=[];
  public categoriesSubject=new BehaviorSubject(this.categories);
  public categoriesObservable=this.categoriesSubject.asObservable();
  public backendUrl = (!window.location.host.includes('localhost')?prod.baseurl: env.baseurl);
  constructor(private readonly http:HttpClient) {
    this.getCategories()
   }

  ngOnInit(): void {
  }

  public getCategories(){
     this.http.get<any>(this.backendUrl+'products/categories')
     .subscribe(res=>{
      this.categories = res
      this.categoriesSubject.next(this.categories)

     })

  }
}
