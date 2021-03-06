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
  productId: string = null;

  constructor(private fb: FormBuilder, private dataService: DataService, private route: ActivatedRoute, private readonly location: Location) {
  }

  ngOnInit(): void {
    this.loadNewForm();
    this.loadData();
  }

  save() {
    const formModel = this.productForm.value;
    const newProduct: Product = {
      _id: this.productId,
      categoryId: formModel.category._id,
      imgUrl: formModel.img,
      title: formModel.title,
      price: formModel.price,
      description: formModel.description
    }

    if (this.isNew) {
      this.dataService.addProduct(newProduct)
        .then(res => {
          this.productForm.reset({
            category: this.categories[0],
            img: '',
            title: '',
            price: 1,
            description: ''
          });
          alert('Product was added successfully.');
        })
        .catch(err => {
          console.error(err);
        });
    } else {
      this.dataService.editProduct(newProduct, this.productId)
        .then(res => {
          this.productForm.reset({
            category: this.categories[0],
            img: '',
            title: '',
            price: 1,
            description: ''
          });
          alert('Product was edited successfully.');
          this.location.back();
        })
        .catch(err => {
          console.error(err);
        });
    }
  }

  loadNewForm(): void {
    this.productForm = this.fb.group({
      category: ['', Validators.required],
      img: ['', Validators.required],
      title: ['', Validators.required],
      price: [1, [Validators.required, Validators.min(0.01)]],
      description: ''
    });
  }

  async loadData(): Promise<void> {
    this.categories = await this.dataService.getCategories();
    let newProduct: Product;
    this.isNew = this.route.snapshot.data.new;
    if (!this.isNew) {
      this.productId = this.route.snapshot.paramMap.get('id');
      newProduct = await this.dataService.getProduct(this.productId);
      this.productForm = this.fb.group({
        category: [this.categories.find(category => category._id === newProduct.categoryId), Validators.required],
        img: [newProduct.imgUrl, Validators.required],
        title: [newProduct.title, Validators.required],
        price: [newProduct.price, [Validators.required, Validators.min(0.01)]],
        description: newProduct.description
      });
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
