import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'navigation-bar-practice';
  recentTag = "home";

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }
  ngAfterViewInit() {
    let aElements = document.getElementsByTagName("a");
    aElements[0].style.backgroundColor = "green";
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        if(event.urlAfterRedirects === "/notfound")
          document.getElementById(this.recentTag)!.style.backgroundColor = "black";
      }
    });
    for(let i = 0; i < aElements.length; i++) {
      aElements[i].addEventListener("mouseover", () => {
        if(aElements[i].id !== this.recentTag)
          aElements[i].style.backgroundColor = "rgb(126, 126, 126)";
      });
      aElements[i].addEventListener("mouseout", () => {
        if(aElements[i].id !== this.recentTag)
          aElements[i].style.backgroundColor = "black";
      });
      aElements[i].addEventListener("click", () => {
        let oldTag = document.getElementById(this.recentTag);
        oldTag!.style.backgroundColor = "black";
        this.recentTag = aElements[i].id;
        aElements[i].style.backgroundColor = "green";
      });
    }
  }  
}
