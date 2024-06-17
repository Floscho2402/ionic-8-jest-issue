import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonButton, IonInput, IonTextarea } from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

interface IFormErrors {
  start: string | undefined;
  end: string | undefined;
  firstMessage: string | undefined;
  secondMessage: string | undefined;
}

@Component({
  selector: 'sof-add-screen-modal',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  standalone: true,
  imports: [IonButton, IonInput, TranslateModule, IonTextarea, ReactiveFormsModule, AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoComponent implements OnInit {
  protected formGroup: FormGroup;

  protected errors$: Observable<IFormErrors>;
  protected errors: BehaviorSubject<IFormErrors>;

  constructor() {
    this.errors = new BehaviorSubject<IFormErrors>({
      start: undefined,
      end: undefined,
      firstMessage: undefined,
      secondMessage: undefined
    });
    this.errors$ = this.errors.asObservable();
  }

  public ngOnInit(): void {
    this.formGroup = new FormGroup<{
      start: FormControl<string>;
      end: FormControl<string>;
      firstMessage: FormControl<string>;
      secondMessage?: FormControl<string>;
      thirdMessage?: FormControl<string>;
    }>({
      start: new FormControl(null, Validators.required),
      end: new FormControl(null, Validators.required),
      firstMessage: new FormControl(null, Validators.required),
      secondMessage: new FormControl(null, Validators.required),
      thirdMessage: new FormControl(null)
    });
  }

  protected decline(): void {}

  protected confirm(): void {}
}
