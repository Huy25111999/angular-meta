import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  isCollapsed = true;

  constructor(
    private router: Router) {
  }

  ngOnInit() {

  }

  ngAfterViewInit() {

    setTimeout(() => {
      this.isCollapsed = true;
    })
  }

  protected checkLogin() {
  }

  actionCollapased() {
    console.log(this.isCollapsed);
    this.isCollapsed = !this.isCollapsed;
  }
}
