import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCreateComponent } from './users-create.component';

describe('UserCreateComponent', () => {
  let component: UserCreateComponent;
  let fixture: ComponentFixture<UserCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserCreateComponent], // Déclarez le composant que vous testez ici
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
