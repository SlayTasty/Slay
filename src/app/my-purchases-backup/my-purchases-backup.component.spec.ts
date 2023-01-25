import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxListModule, IgxButtonModule, IgxRippleModule, IgxIconModule } from 'igniteui-angular';
import { MyPurchasesBackupComponent } from './my-purchases-backup.component';

describe('MyPurchasesBackupComponent', () => {
  let component: MyPurchasesBackupComponent;
  let fixture: ComponentFixture<MyPurchasesBackupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPurchasesBackupComponent ],
      imports: [ NoopAnimationsModule, FormsModule, HttpClientTestingModule, IgxListModule, IgxButtonModule, IgxRippleModule, IgxIconModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPurchasesBackupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
