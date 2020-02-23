import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flex',
  templateUrl: './flex.component.html',
  styleUrls: ['./flex.component.css']
})
export class FlexComponent implements OnInit {
  flexDirection: string = 'row';
  flexWrap: string = 'nowrap';

  constructor() { }

  ngOnInit(): void {
  }

  toggleFlexDirection(flexDirection: string) :void {
    this.flexDirection = flexDirection;
  }

  changeFlexWrap(flexWrap: string) :void {
    this.flexWrap = flexWrap;
  }

}
