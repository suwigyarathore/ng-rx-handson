import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddProductComponent } from "./add-product.component";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: AddProductComponent
  }
];
@NgModule({
  declarations: [AddProductComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class AddProductModule {}
