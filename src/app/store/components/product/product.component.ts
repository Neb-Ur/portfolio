import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products = [
    {
      name: 'test',
      description: 'test',
      price: 1,
      stock: 1,
    },
    {
      name: 'test',
      description: 'test',
      price: 1,
      stock: 1,
    },
    {
      name: 'test',
      description: 'test',
      price: 1,
      stock: 1,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
