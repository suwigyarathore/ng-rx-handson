import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FavoriteProductComponent } from "./favorite-product.component";
import { Routes, RouterModule } from "@angular/router";
import { MatCardModule } from "@angular/material/card";
import { MatRadioModule } from "@angular/material/radio";

const routes: Routes = [
  {
    path: "",
    component: FavoriteProductComponent
  }
];
@NgModule({
  declarations: [FavoriteProductComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatRadioModule,
    RouterModule.forChild(routes)
  ]
})
export class FavoriteProductModule {}
