import { Component, Input, OnInit } from '@angular/core';
import { IFormOptions } from '@interfaces';

@Component({
  selector: 'wc-form',
  templateUrl: './wc-form.component.html',
  styleUrls: ['./wc-form.component.scss']
})
export class WcFormComponent implements OnInit {

  @Input() options?: IFormOptions;

  constructor() { }

  ngOnInit(): void {
  }

}
