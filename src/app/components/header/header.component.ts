import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';    
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items !: MenuItem[] ;


  constructor(private router: Router){

  }
  ngOnInit() {
    this.showTabMenu()
    
   
}
  private showTabMenu(){
    this.items =  this.items = [
      { label: 'Home', command: () => this.navigateToPage('')},
      { label: 'Carteira', command: () => this.navigateToPage('carteira') },
      { label: 'Mercado', command: ()=> this.navigateToPage('mercado') },
      
  ];

  }
  private navigateToPage(page:string){
    this.router.navigate([page])
  }




}
