import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-selector-multiple',
  templateUrl: './selector-multiple.component.html',
  styleUrls: ['./selector-multiple.component.scss']
})
export class SelectorMultipleComponent implements OnInit {

  @Input('options') options: { id: string, selected: boolean, title: string }[] = [];

  @Output('selectedOptions') selectedOptionsHandler = new EventEmitter<string[]>();

  public query: '';

  constructor() { }

  ngOnInit(): void {
  }

  public toggleSelection(option) {
    option.selected = !option.selected;
    const selectedIds = this.options.filter(option => option.selected).map(option => option.id);
    this.selectedOptionsHandler.emit(selectedIds);
  }

  public selectedOptions() {
    return this.options.filter(option => option.selected)
  }

  public nonSelectedOptions() {
    return this.options.filter(option => !option.selected && option.title.includes(this.query));
  }

}
