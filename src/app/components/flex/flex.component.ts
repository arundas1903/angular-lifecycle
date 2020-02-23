import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flex',
  templateUrl: './flex.component.html',
  styleUrls: ['./flex.component.css']
})
export class FlexComponent implements OnInit {
  flexDirection: string = 'row';
  flexWrap: string = 'nowrap';
  justifyContent: string = 'flex-start';
  boxWidth1: number = 600;
  boxWidth2: number = 600;
  boxWidth3: number = 600;
  boxWidth4: number = 600;

  constructor() { }

  ngOnInit(): void {
  }

  toggleFlexDirection(flexDirection: string) :void {
    this.flexDirection = flexDirection;
  }

  changeFlexWrap(flexWrap: string) :void {
    this.flexWrap = flexWrap;
  }

  changeJustifyContent(justifyContent: string) :void {
    this.justifyContent = justifyContent;
  }

  setBoxWidth(width: number): void {
    this.boxWidth1 = width;
    this.boxWidth2 = width;
    this.boxWidth3 = width;
    this.boxWidth4 = width;
  }

}
