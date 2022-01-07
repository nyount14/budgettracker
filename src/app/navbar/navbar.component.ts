import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isShown:boolean = false;
  isAuthenticated = false;
  private userSub: Subscription;

  constructor() { }

  ngOnInit() {
  }

  }

