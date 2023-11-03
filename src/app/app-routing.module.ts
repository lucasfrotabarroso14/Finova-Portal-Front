import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MercadoComponent } from './pages/mercado/mercado.component';
import { TabelaPortfolioComponent } from './components/tabela-portfolio/tabela-portfolio.component';
import { CarteiraComponent } from './pages/carteira/carteira.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'mercado', component:MercadoComponent},
  {path:'tabela/:id', component: TabelaPortfolioComponent},
  {path:'carteira', component: CarteiraComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
