import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-to-child-input',
  templateUrl: './parent-to-child-input.component.html',
  styleUrls: ['./parent-to-child-input.component.css']
})
export class ParentToChildInputComponent implements OnInit {

  parentData: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
