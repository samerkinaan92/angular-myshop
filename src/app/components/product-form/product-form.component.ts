import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories: Category[];
  productForm: FormGroup;
  isNew: boolean;
  productId: number = -1;

  constructor(private fb: FormBuilder, private dataService: DataService, private route: ActivatedRoute, private readonly location: Location) {
    this.categories = dataService.getCategories();
  }

  ngOnInit(): void {
    let newProduct: Product = { id: -1, categoryId: '0', imgUrl: '', title: '', price: 1, description: '' };
    this.isNew = this.route.snapshot.data.new;
    if (!this.isNew) {
      this.productId = +this.route.snapshot.paramMap.get('id');
      newProduct = this.dataService.getProduct(this.productId);
    }
    this.productForm = this.fb.group({
      category: [this.categories[parseInt(newProduct.categoryId) - 1], Validators.required],
      img: [newProduct.imgUrl, Validators.required],
      title: [newProduct.title, Validators.required],
      price: [newProduct.price, [Validators.required, Validators.min(0.01)]],
      description: newProduct.description
    });
  }

  save() {
    const formModel = this.productForm.value;
    const newProduct: Product = {
      id: this.productId,
      categoryId: formModel.category.id,
      imgUrl: formModel.img,
      title: formModel.title,
      price: formModel.price,
      description: formModel.description
    }

    if (this.isNew) {
      this.dataService.addProduct(newProduct);
      this.productForm.reset({
        category: this.categories[0],
        img: '',
        title: '',
        price: 1,
        description: ''
      });
      alert('Product was added successfully.');
    } else {
      this.dataService.editProduct(newProduct, this.productId);
      this.location.back();
    }
  }

  get category(): AbstractControl {
    return this.productForm.get('category');
  }

  get img(): AbstractControl {
    return this.productForm.get('img');
  }

  get title(): AbstractControl {
    return this.productForm.get('title');
  }

  get price(): AbstractControl {
    return this.productForm.get('price');
  }
}
