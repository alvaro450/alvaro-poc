import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'alvaro-poc-ads',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ads.component.html',
  styleUrl: './ads.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AdsComponent {}
