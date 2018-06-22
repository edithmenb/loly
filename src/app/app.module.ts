import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ShoesComponent } from './shoes/shoes.component';
import { BagsComponent } from './bags/bags.component';
import { ArticleComponent } from './article/article.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SalesComponent } from './sales/sales.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'shoes', component: ShoesComponent },
  { path: 'bags', component: BagsComponent },
  { path: 'sales', component: SalesComponent },
  { path: 'notfound', component: NotFoundComponent },
  { path: 'article/:id', component: ArticleComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ShoesComponent,
    BagsComponent,
    ArticleComponent,
    NotFoundComponent,
    SalesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
