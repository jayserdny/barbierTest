import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {FloraAndFaunaComponent} from './pages/flora-and-fauna/flora-and-fauna.component';
import {SmallPTGSComponent} from './pages/small-ptgs/small-ptgs.component';
import {BiographyComponent} from './pages/biography/biography.component';
import {CatalogComponent} from './pages/catalog/catalog.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'flora-and-fauna', component: FloraAndFaunaComponent },
  { path: 'small-ptgs', component: SmallPTGSComponent },
  { path: 'biography', component: BiographyComponent },
  { path: 'catalog', component: CatalogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
