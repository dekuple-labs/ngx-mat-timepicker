import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'docs-basic',
  templateUrl: './basic.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class BasicComponent {}
