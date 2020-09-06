import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
      }
    ], {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
