import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  Products:any[] = [
    {
      id: "SHL0001",
      image: "../assets/S2.jpg",
      name: "Thrift Shirt",
      description: "Comfortable, casual and loose fitting, our heavyweight dark color t-shirt will quickly become one of your favorites.",
      style:"background-color: wheat;"
    },
    {
      id: "SHL0002",
      image: "../assets/S4.jpg",
      name: "Thrift Shoes",
      description: "Unstructured fabric shoulder bag that can either be worn parallel to your body, or across it."
    },
    {
      id: "SHL0003",
      image: "../assets/B1.jpg",
      name: "Thrift Handbags",
      description: "Made of 100% natural material and can be customized with your favorite pictures and text for the perfect gift or casual accessory.",
      style:"background-color: wheat;"
    },
    {
      id: "SHL0004",
      image: "../assets/J1.jpeg",
      name: "Thrift Jogging Pants",
      description: "Made of fabric that allow for maximum comfort and ease."
    },
    {
      id: "SHL0005",
      image: "../assets/F1.jpg",
      name: "Thrift Faceshields",
      description: "New and improved face shields with comfortable glasses frames for adults and kids are here.",
      style:"background-color: wheat;"
    },
    {
      id: "SHL0006",
      image: "../assets/M1.jpg",
      name: "Thrift Mugs",
      description: "Commuter mugs feature a rubber-lined lid for a tight, spill-resistant seal, twist the lid to reveal the sip opening"
    },
  ];
  
  trackByData(index:number, Products:any): number {
    return Products.id;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
