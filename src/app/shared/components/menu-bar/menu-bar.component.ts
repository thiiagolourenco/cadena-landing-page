import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-menu-bar',
  imports: [MenubarModule, CommonModule, ButtonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss',
})
export class MenuBarComponent implements OnInit {
  public items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
      },
      {
        label: 'Privacy',
      },
      {
        label: 'Terms',
      },
      {
        label: 'Log in',
      },
      {
        label: 'Sign up',
      },
    ];
  }
}
