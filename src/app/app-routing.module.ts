import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: "./add-product/add-product.module#AddProductModule"
  },
  {
    path: "cart",
    loadChildren:
      "./favorite-product/favorite-product.module#FavoriteProductModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
