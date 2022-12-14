import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Home/header/header.component';
import { BannerComponent } from './Home/banner/banner.component';
import { ClotheCategoriesComponent } from './Home/clothe-categories/clothe-categories.component';
import { TitleComponent } from './Home/title/title.component';
import { ProductCardComponent } from './Home/product-card/product-card.component';
import { MobileBottomMenuComponent } from './Home/mobile-bottom-menu/mobile-bottom-menu.component';
import { AppRoutesModule } from './app-routes.module';
import { MainPageComponent } from './ExpandArticle/main-page/main-page.component';
import { HomePageComponent } from './Home/home-page/home-page.component';
 import { MainPageComponent as cart } from './ShopCard/main-page/main-page.component';
import { SideBarComponent } from './Home/side-bar/side-bar.component';
import { FooterComponent } from './Home/footer/footer.component';
import { PaginationComponent } from './Home/pagination/pagination.component';
 import { HttpClientModule } from '@angular/common/http';
import { CommandCheckComponent } from './command-check/command-check.component'; 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    ClotheCategoriesComponent,
    TitleComponent,
    ProductCardComponent,
    MobileBottomMenuComponent,
    MainPageComponent,
    HomePageComponent,
    cart,
    SideBarComponent,
    FooterComponent,
    PaginationComponent,
    CommandCheckComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
