import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  cardTitle: string = "Mandarin";
  cardTitle2: string = "Ciumparin";

  cardContent: string = "<p>laksdf</p>"
}
