import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']


})
export class CardComponent {
  @Input() title: string = "";
  @Input() title2: string = "";

  modalTitle: string = "First modal ";

  isVisible = false;


  showModal(): void {
    this.isVisible = true;
    this.modalTitle = this.modalTitle + this.title;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
