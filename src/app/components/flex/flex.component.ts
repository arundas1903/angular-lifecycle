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
  alignItems: string = 'stretch';
  alignContent: string = 'flex-start';
  boxWidth1: number = 600;
  boxWidth2: number = 600;
  boxWidth3: number = 600;
  boxWidth4: number = 600;
  boxHeight1: number = 50;
  boxHeight2: number = 50;
  boxHeight3: number = 50;
  boxHeight4: number = 50;
  boxOrder1: number = 0;
  boxOrder2: number = 0;
  boxOrder3: number = 0;
  boxOrder4: number = 0;
  boxFlexGrow1: number = 1;
  boxFlexGrow2: number = 1;
  boxFlexGrow3: number = 1;
  boxFlexGrow4: number = 1;
  boxFlexShrink1: number = 1;
  boxFlexShrink2: number = 1;
  boxFlexShrink3: number = 1;
  boxFlexShrink4: number = 1;
  alignSelfItems = ["auto", "flex-start", "flex-end", "center", "baseline", "stretch"];
  box1AlignSelf = "auto";
  box2AlignSelf = "auto";
  box3AlignSelf = "auto";
  box4AlignSelf = "auto";
  boxContainerHeight: number = 100;

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

  changeAlignItems(alignItems: string) :void {
    this.alignItems = alignItems;
  }

  setBoxWidth(width: number): void {
    this.boxWidth1 = width;
    this.boxWidth2 = width;
    this.boxWidth3 = width;
    this.boxWidth4 = width;
  }

  setBoxHeight(height: number) :void {
    this.boxHeight1 = height;
    this.boxHeight2 = height;
    this.boxHeight3 = height;
    this.boxHeight4 = height; 
  }

  changeAlignContent(alignContent: string) :void {
    this.alignContent = alignContent;
  }

}
