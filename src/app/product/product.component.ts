import { Component, OnInit  } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 products:any[]=[]
 msg:string =""
  constructor(private productService: ProductService) { }

  async ngOnInit() {
    try {
      const response = await this.productService.getProducts();
      this.products = response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }
   deleteProduct = async (product:any)=>{
    console.log(product)
    const response = await this.productService.deleteProduct(product);
    this.msg = response.data.msg;
    this.ngOnInit()

   }


}
