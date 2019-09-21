import { Component, OnInit } from '@angular/core';
declare var $: any;
//<any> $;
//window["$"] = $;
//window["jQuery"] = $;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
 // $.getScript('assets/themekit/scripts/jquery.min.js');
 // $.getScript('assets/themekit/scripts/glide.min.js');
	  }
  }

