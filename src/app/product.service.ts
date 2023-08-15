import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://127.0.0.1:8000/api'; // Replace with your actual backend API URL

  constructor( private http:HttpClient) { }
  getProducts() {
    return axios.get(`${this.apiUrl}/products`);
  }
  getProduct(id:any) {
    return axios.get(`${this.apiUrl}/products/${id}`);
  }
  deleteProduct(id:any){
    console.log(id)
    return axios.delete(`${this.apiUrl}/products/${id}`);

  }
}

