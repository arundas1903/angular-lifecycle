import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  mainHooks: Array<string> = [];
  inputData: string = "";
  inputEnabled: boolean = false;

  constructor() { 
    this.mainHooks.push("constructor");
    console.log("constructor")
  }

  ngOnInit(): void {
    this.mainHooks.push("ngOnInit");
    console.log("ngOnInit")
  }

  ngDoCheck(): void {
    this.mainHooks.push("ngDoCheck");
    console.log("ngDoCheck")
  }

  ngAfterContentInit() :void {
    this.mainHooks.push("ngAfterContentInit");
    console.log("ngAfterContentInit")
  }

  ngAfterContentChecked() :void {
    this.mainHooks.push("ngAfterContentChecked");
    console.log("ngAfterContentChecked")
  }
  
  ngAfterViewInit() :void {
    this.mainHooks.push("ngAfterViewInit");
    console.log("ngAfterViewInit")
  }

  ngAfterViewChecked() :void {
    this.mainHooks.push("ngAfterViewChecked");
    console.log("ngAfterViewChecked")
  }

  ngOnDestroy() :void {
    console.log("ngOnDestroy")
  }

  toggleInput() {
    this.inputEnabled = !this.inputEnabled;
  }

}
