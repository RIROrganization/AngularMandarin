import { modalType } from './../../types/modal-type';
import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {

  cardList: modalType[] = [
    {
      title: "Pachet S",
      body: "Pachetul S este potrivit pentru o seara cu cei mai buni prieteni!",
      modalBody: "<ul><li>10 doze de suc</li><li>5 pungi de doritos</li><li>3 pungi de seminte</li></ul>",
      pret: 50
    },
    {
      title: "Pachet L",
      body: "Pachetul L este potrivit pofticiosilor!",
      modalBody: "<ul><li>20 doze de suc</li><li>10 pungi de doritos</li><li>5 pungi de seminte</li><li>3 pizza de 20cm</li></ul>",
      pret: 100
    },
    {
      title: "Pachet XL",
      body: "Pachetul XL este destinat celor mai curajosi dintre voi!",
      modalBody: "<ul><li>40 doze de suc</li><li>25 pungi de doritos</li><li>10 pungi de seminte</li><li>5 pizza XXL</li></ul>",
      pret: 150
    }
  ]
}
