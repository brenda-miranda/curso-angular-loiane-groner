import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService { // essa classe pode ser injetada em outra classe, para que o uso dela possa ser feito

  constructor() { }

  getCursos() {
    return ['Java', 'Ext JS', 'Angular', 'Teste'];
  }
}


/*
 *
 * Injeção de dependência: é fazer com que o angular nos forneça automaticamente 
 * uma instância de uma classe de serviço, para que a gente faça o uso dessa 
 * instância e não precise instanciar manualmente uma classe de serviço.
 *
 */