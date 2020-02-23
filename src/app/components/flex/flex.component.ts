import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flex',
  templateUrl: './flex.component.html',
  styleUrls: ['./flex.component.css']
})
export class FlexComponent implements OnInit {
  flexDirection: string = 'column';

  constructor() { }

  ngOnInit(): void {
  }

  toggleFlexDirection() :void {
    if (this.flexDirection === 'row') {
      this.flexDirection = 'column';
    } else {
      this.flexDirection = 'row';
    }
  }

}
