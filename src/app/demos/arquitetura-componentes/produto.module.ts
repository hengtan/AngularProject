import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { registerLocaleData } from "@angular/common";
import localePt from "@angular/common/locales/pt";
registerLocaleData(localePt);

import { ProdutoDashboardComponent } from "./produto-dashboard/produto-dashboard.component";
import { ProdutoDetalheComponent } from "./componentes/produto-card-detalhe.component";

import { ProdutoRouteModule } from "./produto.route";
import { ProdutoCountComponent } from "./componentes/produto-count-component";

@NgModule({
  declarations: [
    ProdutoDashboardComponent,
    ProdutoDetalheComponent,
    ProdutoCountComponent,
  ],
  imports: [CommonModule, ProdutoRouteModule],
  exports: [],
})
export class ProdutoModule {}
