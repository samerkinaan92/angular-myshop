import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  @Input() productId: number;
  categories: Category[];
  productForm: FormGroup;
  @Output() savedEvent = new EventEmitter();

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.categories = dataService.getCategories();
  }

  ngOnInit(): void {
    let newProduct: Product = { categoryId: "0", imgUrl: '', title: '', price: 1, description: '' };
    if (this.productId !== -1) {
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
      categoryId: formModel.category.id,
      imgUrl: formModel.img,
      title: formModel.title,
      price: formModel.price,
      description: formModel.description
    }

    if (this.productId === -1) {
      this.dataService.addProduct(newProduct);
      this.productForm.reset({
        category: this.categories[0],
        img: '',
        title: '',
        price: 1,
        description: ''
      });
      alert("Product was added.");
    } else {
      this.dataService.editProduct(newProduct, this.productId);
      this.savedEvent.emit();
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
