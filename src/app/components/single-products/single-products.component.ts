import { ApiProductsService } from 'src/app/services/api-products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-products',
  templateUrl: './single-products.component.html',
  styleUrls: ['./single-products.component.scss']
})
export class SingleProductsComponent implements OnInit {
product !:any;
  constructor(private api:ApiProductsService, private route:ActivatedRoute) {}   

  ngOnInit(): void {
    const productId= +this.route.snapshot.params['id'];
    this.api.getProductById(productId).subscribe((res)=>{
      this.product = res;
    })
  }

}
