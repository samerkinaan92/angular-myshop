import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {

  categories: Category[];
  productForm: FormGroup;

  constructor(fb: FormBuilder,private dataService: DataService) {
    this.categories = dataService.getCategories();
    this.productForm = fb.group({
      category: [this.categories[0], Validators.required],
      img: ['', Validators.required],
      title: ['', Validators.required],
      price: [1, [Validators.required, Validators.min(1)]],
      description: ''
    });
  }

  save(){
    const formModel = this.productForm.value;
    const newProduct: Product = {
      categoryId: formModel.category.id,
      imgUrl: formModel.img,
      title: formModel.title,
      price: formModel.price,
      description: formModel.description
    }

    this.dataService.addProduct(newProduct);
  }
}
