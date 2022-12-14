import { Component, OnInit } from '@angular/core';
import { CategorieServiceService } from 'src/app/categories/categorie-service.service';
import { WishListService } from 'src/app/WhishList-Service/wish-list.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  public active:boolean=false;
  categorieItem:any[]=[]

  constructor(private sidebar: WishListService,private categorie:CategorieServiceService) {
  }

  ngOnInit(): void {
    this.categorie.categoriesObservable.subscribe(res=>{
      this.categorieItem = res
     })
    this.sidebar.sibarobservable.subscribe(active=> this.active = active)
  }

  close(){
    document.body.classList.toggle('fixed')
    this.sidebar.handleSidebar()
  }

  stopProp(e:Event){
    e.stopPropagation()
  }


}
