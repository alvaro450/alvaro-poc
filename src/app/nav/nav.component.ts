import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'alvaro-poc-nav',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {
  activeLinkClasses = [
    'text-blue-600',
    'border-b-2',
    'border-blue-600',
    'rounded-t-lg',
    'active',
    'dark:text-blue-500',
    'dark:border-blue-500',
  ];
}
