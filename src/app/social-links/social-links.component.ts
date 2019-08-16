import { Component, OnInit, ContentChildren, ElementRef, QueryList, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.css'],
})
export class SocialLinksComponent implements AfterContentInit {

  
  @ContentChildren('link') links: QueryList<ElementRef>;

  constructor() { }

  ngAfterContentInit(){
    this.links.forEach((link) => {
      link.nativeElement.setAttribute('target', '_blank');
    });
  }

}
