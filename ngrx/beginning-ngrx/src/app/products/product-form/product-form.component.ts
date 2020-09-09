import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styles: []
})
export class ProductFormComponent implements OnInit {

  private _form: FormGroup;

  constructor(public router: Router, private fb: FormBuilder) {

    this._form = this.fb.group({
      title: [''],
      description: [''],
      quantity: [''],
      status: [false],
    });
  }

  ngOnInit(): void {
  }

  public save() {
    console.log(this._form.value);
  }

  get form(): FormGroup {
    return this._form;
  }

  set form(value: FormGroup) {
    this._form = value;
  }
}
