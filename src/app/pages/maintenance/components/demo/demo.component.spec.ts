import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DemoComponent } from './demo.component';
import { importProvidersFrom } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

describe('DemoComponent', () => {
  let component: DemoComponent;
  let fixture: ComponentFixture<DemoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [DemoComponent],
      providers: [importProvidersFrom(TranslateModule.forRoot())]
    }).compileComponents();

    fixture = TestBed.createComponent(DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
