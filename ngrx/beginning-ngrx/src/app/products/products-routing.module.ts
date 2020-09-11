import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductFormComponent} from './product-form/product-form.component';
import {ProductListComponent} from './product-list/product-list.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/product', pathMatch: 'full'
  },
  {
    path: 'product', component: ProductListComponent
  },
  {
    path: 'product/new', component: ProductFormComponent
  },
  {
    path: 'product/:id', component: ProductFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {
}
