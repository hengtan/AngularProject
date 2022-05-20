import { Component, Input } from "@angular/core";
import { Produto } from "../models/produto";

@Component({
  selector: "produto-count",
  template: ` <div>
    <h3>Produtos</h3>
    <div>
      Produtos ativos: {{ contatorAtivos() }} no total de
      {{ produtos.length }} produtos <br />
      <br />
    </div>
  </div>`,
})
export class ProdutoCountComponent {
  @Input()
  produtos: Produto[];

  contatorAtivos(): number {
    if (!this.produtos) return;

    return this.produtos.filter((produto: Produto) => produto.ativo).length;
  }
}
