import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss']
})
export class ContactFilterComponent implements OnInit {

  @Input() formId: string;
  @Output() resetFilter = new EventEmitter();

  isFiltered = false;

  constructor() { }

  ngOnInit() {
  }

  reset(): void {
    this.resetFilter.emit();
    this.isFiltered = false;
  }

}
