import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  message: string = 'Are you sure you want to delete?';
  @Output() no = new EventEmitter();
  @Output() yes = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onNo() {
    this.no.emit();
  }

  onYes() {
    this.yes.emit();
  }
}
