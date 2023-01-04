import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { Warehouse1Component } from './warehouse1.component';

describe('Warehouse1Component', () => {
  let component: Warehouse1Component;
  let fixture: ComponentFixture<Warehouse1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ Warehouse1Component ]
    })
    .compileComponents();
  });

    it('should create the app', () => {
      const fixture = TestBed.createComponent(Warehouse1Component);
      const app = fixture.componentInstance;
      expect(app).toBeTruthy();
    });
  
    it(`should have as title 'warehouse-inventory'`, () => {
      const fixture = TestBed.createComponent(Warehouse1Component);
      const app = fixture.componentInstance;
      expect(app.title).toEqual('warehouse-inventory');
    });
  
    it('should render title', () => {
      const fixture = TestBed.createComponent(Warehouse1Component);
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('.content span')?.textContent).toContain('warehouse-inventory app is running!');
    });
  });