import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorieServiceService  implements OnInit {
  categories:any=[];
  public categoriesSubject=new BehaviorSubject(this.categories);
  public categoriesObservable=this.categoriesSubject.asObservable();

  constructor(private readonly http:HttpClient) {
    this.getCategories()
   }

  ngOnInit(): void {
  }

  public getCategories(){
     this.http.get<any>('https://glems-backend.herokuapp.com/products/categories')
     .subscribe(res=>{
      this.categories = res
      this.categoriesSubject.next(this.categories)

     })

  }
}
