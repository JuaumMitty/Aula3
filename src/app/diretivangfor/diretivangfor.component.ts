import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivangfor',
  templateUrl: './diretivangfor.component.html',
  styleUrls: ['./diretivangfor.component.css']
})
export class DiretivangforComponent implements OnInit {
  vetor : number[] =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ]; // declarando vetor
  constructor() { }

  ngOnInit(): void {
  }

}
