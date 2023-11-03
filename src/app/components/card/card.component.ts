import { Component, Input, OnInit } from '@angular/core';
import { format } from 'date-fns';
import { NewsArticle } from 'src/app/Interfaces/Noticias';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() article !: NewsArticle
  @Input() imagem !: string

  constructor(){

  }
  ngOnInit(): void {
      this.serializeDate()
  }
  serializeDate() {
    const formattedDate = format(new Date(this.article.publishedAt), 'dd/MM/yyyy HH:mm:ss');
    this.article.publishedAt = formattedDate;
  }

    
  }




