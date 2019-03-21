import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder
} from "@angular/forms";

@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.scss"]
})
export class AddProductComponent implements OnInit {
  productForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.productForm = this.formBuilder.group({
      productName: ["", Validators.required]
    });
  }

  ngOnInit() {}

  onSubmit() {
    const { productName } = this.productForm.value;
    console.log("Product Name:", productName);
  }
}
