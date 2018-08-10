import { Component, OnInit, Input } from '@angular/core';
import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  public coracaoVazio: string = "";
  public coracaoCheio: string = "";

  public coracoes : Array<Coracao> = []

  @Input()
  public tentativas: number;

  constructor() {       
  }

  ngOnInit() {
    this.coracoes = [];
    for (var i = 0; i < this.tentativas;i++){      
      this.coracoes.push(new Coracao(true));
    }    
  }

  ngOnChanges(): void {    
    for (var i = 0; i < this.tentativas;i++){      
      this.coracoes.push(new Coracao(false));
    }  
  }
}
