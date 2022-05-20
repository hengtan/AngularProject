import { Component, OnInit } from "@angular/core";
import { Produto } from "../models/produto";

@Component({
  selector: "app-produto-dashboard",
  templateUrl: "./produto-dashboard.component.html",
  styles: [],
})
export class ProdutoDashboardComponent implements OnInit {
  produtos: Produto[];

  constructor() {}

  ngOnInit() {
    this.produtos = [
      {
        id: 1,
        nome: "mouse Microsoft",
        ativo: true,
        valor: 15.9,
        imagem: "mouse.jpg",
      },
      {
        id: 2,
        nome: "Teclado Microsoft",
        ativo: true,
        valor: 30.0,
        imagem: "teclado.jpg",
      },
      {
        id: 3,
        nome: "Monitor Samsung",
        ativo: false,
        valor: 2001.0,
        imagem: "monitor.jpg",
      },
      {
        id: 4,
        nome: "Laptop Asus",
        ativo: true,
        valor: 3000.0,
        imagem: "laptop.jpg",
      },
      {
        id: 5,
        nome: "Headset Microsoft",
        ativo: false,
        valor: 11.2,
        imagem: "headset.jpg",
      },
      {
        id: 6,
        nome: "Webcam Logitech",
        ativo: true,
        valor: 49.99,
        imagem: "webcam.jpg",
      },
      {
        id: 7,
        nome: "Mousepad Microsoft",
        ativo: true,
        valor: 5.5,
        imagem: "mousepad.jpg",
      },
      {
        id: 8,
        nome: "Galaxy S10+",
        ativo: true,
        valor: 5.5,
        imagem: "celular.jpg",
      },
      {
        id: 9,
        nome: "Go Pro 8",
        ativo: true,
        valor: 300.0,
        imagem: "gopro.jpg",
      },
    ];
  }
}
