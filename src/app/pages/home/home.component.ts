import { Component, OnInit } from '@angular/core';
import { NewsArticle } from 'src/app/Interfaces/Noticias';
import { NewsService } from 'src/app/services/news.service';
import { Page } from 'src/app/Interfaces/Pagination';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  newsArticles : NewsArticle[]= []
  imagem !: string 
  first : number = 0 ;
  itemsPerPage :number = 6 ;
  currentPage : number = 1
  // paginas : NewsArticle[] [] =[]
  
  

constructor(private newsService: NewsService){}

ngOnInit(): void {
  this.newsService.getNews().subscribe((response) => {
    this.newsArticles = response;
    // this.renderPage();
    // console.log(this.paginas);
  });
}
// renderPage():void{
//   const tamPag = 6
//   let paginaAtual: NewsArticle[] = [];

//   for (let i = 0 ;  i < this.newsArticles.length;i++){
//     const article = this.newsArticles[i];
//     paginaAtual.push(article)
//     if(paginaAtual.length ===tamPag || i === this.newsArticles.length - 1){
//       this.paginas.push([...paginaAtual])
//       paginaAtual = []
      
//     }
//   }
  
  
  


  
  


onPageChange(event: Page): void {
  this.first = event.first;
  this.itemsPerPage = event.itemsPerPage;
  this.currentPage=event.page + 1
  
  
  
}

get paginatedArticles(): NewsArticle[] {
  const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  const endIndex = startIndex + this.itemsPerPage;
  return this.newsArticles.slice(startIndex, endIndex);
}

images : {[key : string]: string } = {
  'G1': '../../../assets/imagens/g1.png',
  'UOL':'../../../assets/imagens/uol.png',
  'Jornal Correio':'../../../assets/imagens/jornal-correio.png',
  'Correio Braziliense':'../../../assets/imagens/correio-brasiliense.png',
  'Estado de Minas': '../../../assets/imagens/estado-de-minas.png',
  'O Antagonista':'../../../assets/imagens/o-antagonista.png',
  'UOL Confere':'../../../assets/imagens/uol.png',
  'CNN Brasil':'../../../assets/imagens/cnn-brasil.png',
  'O Dia':'../../../assets/imagens/o-dia.png',
  'O Tempo' : '../../../assets/imagens/o-tempo.jpeg',
  'TV Senado':'../../../assets/imagens/tv-senado.png',
  'BBC News Brasil':'../../../assets/imagens/bbc-news-brasil.png',
  'Terra':'../../../assets/imagens/terra.png',
  'UOL Esporte': '../../../assets/imagens/uol.png',
  'Jovem Pan': '../../../assets/imagens/jovem-pan.png',
  'Extra':'../../../assets/imagens/extra.png',
  'Poder360':'../../../assets/imagens/poder360.png',
  'NSC Total':'../../../assets/imagens/nscTotal.png',
  'CartaCapital':'../../../assets/imagens/carta-capital-logo.png',
  'Record News':'../../../assets/imagens/record-news-logo.png'

  





}

getFontImage(sourceName : string){
  const imageUrl = this.images[sourceName] || this.imagem
  return imageUrl;
}

}