import { Component, OnInit } from '@angular/core';
import { FRASES } from './frases-mock';
import { Frase } from '../shared/frase.model';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Array<Frase> = FRASES
  public instrucao: string = "Traduza a frase:"
  public resposta: string = "";

  public rodada: number = 0;
  public rodadaFrase: Frase

  public progresso: number = 0;
  public tentativas: number = 3;

  constructor() { 
    this.atualizaRodada()
  }

  ngOnInit() {
  }

  getResposta(resposta: Event):void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  verificarResposta(): void {
    
      if (this.rodadaFrase.frasePTBr == this.resposta){
        
        this.rodada++;
        this.atualizaRodada();

        this.progresso += 25;    
      }else{          
        this.tentativas--;  
        
        if (this.tentativas == -1) {
          alert("GAME OVER");
        }
      }
      
  }
  atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = "";
  }
}
