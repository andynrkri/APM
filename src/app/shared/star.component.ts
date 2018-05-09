import {Component, OnChanges, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'pm-star',
  template: `
    <div class="crop" [style.width.px]="starWidth" [title]="rating" (click)="onClick()">
      <div style="width: 86px"><span class="glyphicon glyphicon-star"></span> <span
        class="glyphicon glyphicon-star"></span> <span class="glyphicon glyphicon-star"></span> <span
        class="glyphicon glyphicon-star"></span> <span class="glyphicon glyphicon-star"></span></div>
    </div>    
  `,
  styles: [".crop{overflow: hidden;} div{cursor: pointer;}"]
})
export class StarComponent implements OnChanges {
  @Input() rating: number;
  starWidth: number;
  //rating click will act as an event, to be used between braces like other events.
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void {
    this.starWidth = this.rating * 86 / 5;
  }

  onClick():void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }

}
