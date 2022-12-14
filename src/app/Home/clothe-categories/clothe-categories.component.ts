import { Component, OnInit } from '@angular/core';
import { CategorieServiceService } from 'src/app/categories/categorie-service.service';

@Component({
  selector: 'app-clothe-categories',
  templateUrl: './clothe-categories.component.html',
  styleUrls: ['./clothe-categories.component.scss']
})
export class ClotheCategoriesComponent implements OnInit {

  categorieItem:any[]=[]
  constructor(private categorie:CategorieServiceService) { }

  ngOnInit(): void {
     this.categorie.categoriesObservable.subscribe(res=>{
      this.categorieItem = res
     })
  }

  getProductByCategorie(categorie:string){
    console.log(categorie)
  }
}
