import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isNavbarCollapsed = true;
  isHomepageActive= true;
  currentPosition = window.pageYOffset;
  scrollingUp = false;
  public navItems: any[] = [
    {url: "games", name:"Games"},
    {url: "studio", name:"Studio"},
    {url: "news", name:"News"},
  ];
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll',[]) onWindowScroll(){
    const verticalOffset = window.pageYOffset
          || document.documentElement.scrollTop
          || document.body.scrollTop || 0;

    if(verticalOffset<10){
      this.scrollingUp = false;
    }
    else if(verticalOffset>this.currentPosition){
      this.scrollingUp = false;
    }else{
      this.scrollingUp = true;
    }
    this.currentPosition = verticalOffset;
  }
}
