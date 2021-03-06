import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { APP_BASE_HREF } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { registerLocaleData } from "@angular/common";
import localePt from "@angular/common/locales/pt";

registerLocaleData(localePt);

import { NgBrazil } from "ng-brazil";
import { TextMaskModule } from "angular2-text-mask";
import { CustomFormsModule } from "ng2-validation";

import { AppComponent } from "./app.component";
import { SobreComponent } from "./institucional/sobre/sobre.component";
import { ContatoComponent } from "./institucional/contato/contato.component";
import { AppRoutingModule } from "./app.routes";
import { DataBindingComponent } from "./demos/data-binding/data-binding.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProdutoService } from "./produtos/produtos.service";
import { ListaProdutoComponent } from "./produtos/lista-produto/lista-produto.component";
import { CadastroComponent } from "./demos/reactiveForms/cadastro/cadastro.component";
import { NavegacaoModule } from "./navegacao/navegacao.module";

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    ContatoComponent,
    DataBindingComponent,
    ListaProdutoComponent,
    CadastroComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    NgBrazil,
    CustomFormsModule,
    NavegacaoModule,
    AppRoutingModule,
  ],
  providers: [ProdutoService, { provide: APP_BASE_HREF, useValue: "/" }],
  bootstrap: [AppComponent],
})
export class AppModule {}
