import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {
  NgbDropdown,
  NgbDropdownItem,
  NgbDropdownMenu,
  NgbNav,
  NgbNavItem,
  NgbNavLink
} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive,
    NgbNavItem, NgbNavLink, NgbNav,
    NgbDropdown, NgbDropdownMenu, NgbDropdownItem, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-ng17';
}
