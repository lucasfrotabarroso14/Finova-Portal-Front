import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaPortfolioComponent } from './tabela-portfolio.component';

describe('TabelaPortfolioComponent', () => {
  let component: TabelaPortfolioComponent;
  let fixture: ComponentFixture<TabelaPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaPortfolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
