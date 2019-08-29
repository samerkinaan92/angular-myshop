import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { ProductFormComponent } from '../components/product-form/product-form.component';

@Injectable({
  providedIn: 'root'
})
export class UnsavedDataGuard implements CanDeactivate<ProductFormComponent> {
  canDeactivate(component: ProductFormComponent): boolean {
    if(component.productForm.dirty){
      if(confirm('You have unsaved changes! If you leave, your changes will be lost.')){
        return true;
      }else{
        return false;
      }
    }
    return true;
  }

}
