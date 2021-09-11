import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.component.html',
  styleUrls: ['./calculo.component.css']
})
export class CalculoComponent implements OnInit {

  resposta:any;
  verifica = false;
  valor: any;
  maior!:string;

  setValor(form: NgForm){
    console.log('calculando form.value.valor');
    let valor=form.value.valor;
    if(valor <= 500){
      this.resposta = valor - (valor*0.05);
      this.maior="alert-success";
    } else{
      this.resposta = valor-(valor*0.1);
      this.maior="alert-danger";
    }
    this.verifica=true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
