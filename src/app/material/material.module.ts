import { NgModule } from '@angular/core';
import { MatIconModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatBadgeModule } from '@angular/material'

const materialModules = [MatIconModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatBadgeModule];

@NgModule({
  imports: [materialModules],
  exports: [materialModules]
})
export class MaterialModule { }
