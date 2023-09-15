import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {
  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();
  @Input()
  public placeholder: string = '';

  emitValue(value: string): void {
    this.onValue.emit(value);
  }
}
