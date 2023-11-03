import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarModule } from 'primeng/sidebar';
import { SidebarComponent } from './components/header/sidebar/sidebar.component';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { HomeComponent } from './pages/home/home.component';
import { TableModule } from 'primeng/table';
import { TabelaPortfolioComponent } from './components/tabela-portfolio/tabela-portfolio.component';
import { HttpClientModule } from '@angular/common/http';
import { MercadoComponent } from './pages/mercado/mercado.component';
import { CarteiraComponent } from './pages/carteira/carteira.component';
import { CardModule } from 'primeng/card';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer/footer.component';

import { ChartComponent } from './components/chart/chart.component';
import { PaginatorModule } from 'primeng/paginator';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    HomeComponent,
    TabelaPortfolioComponent,
    MercadoComponent,
    CarteiraComponent,
    CardComponent,
    FooterComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    ButtonModule,
    BrowserAnimationsModule,
    TabMenuModule,
    TableModule,
    HttpClientModule,
    CardModule,
   
    PaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
