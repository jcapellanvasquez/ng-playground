import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {State} from '../store/reducer';
import {AddProductAction} from '../store/actions';
import {Product} from '../../shared/product';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styles: []
})
export class ProductFormComponent implements OnInit {

  private _form: FormGroup;

  constructor(
    public router: Router,
    private fb: FormBuilder,
    public store: Store<State>,
  ) {

    this._form = this.fb.group({
      key: [''],
      title: ['', [Validators.required]],
      description: [''],
      quantity: ['', [Validators.required]],
      status: [false],
    });
  }

  ngOnInit(): void {
  }

  public save() {
    this.store.dispatch(new AddProductAction({product: {...this.form.value}}));
  }

  get form(): FormGroup {
    return this._form;
  }

  set form(value: FormGroup) {
    this._form = value;
  }
}
