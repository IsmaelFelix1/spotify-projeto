import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMusicaComponent } from './create-musica.component';

describe('CreateMusicaComponent', () => {
  let component: CreateMusicaComponent;
  let fixture: ComponentFixture<CreateMusicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMusicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMusicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
