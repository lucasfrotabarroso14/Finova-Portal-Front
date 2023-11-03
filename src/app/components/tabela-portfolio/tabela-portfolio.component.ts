import { Component, OnInit } from '@angular/core';
import { Portfolio } from 'src/app/Interfaces/Portfolio';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tabela-portfolio',
  templateUrl: './tabela-portfolio.component.html',
  styleUrls: ['./tabela-portfolio.component.scss']
})
export class TabelaPortfolioComponent implements OnInit {
  allPortfolios :Portfolio[] =[]
  data :Portfolio[]= []
  constructor(
    private portfolioService:PortfolioService,
    private router:Router,
    private route: ActivatedRoute,
    ){
    
  }
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.portfolioService
    .getPortfolios()
    .subscribe((data: Portfolio[]) =>{
      this.allPortfolios = data;
      this.data=this.allPortfolios
    })
      
  }
  get_by_id(id:number){
    this.portfolioService.getPortfolioById(id)
    .subscribe((item)=>this.allPortfolios = item)


  }
}