import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import { ClaseModule } from '../../clase.module';
import { ClaseService } from '../../shared/service/clase.service';

import { ClaseEditarComponent } from './clase-editar.component';

describe('ClaseEditarComponent', () => {
  let component: ClaseEditarComponent;
  let fixture: ComponentFixture<ClaseEditarComponent>;
  let claseService: ClaseService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaseEditarComponent ],
      imports:[
        CommonModule,
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule,
        ClaseModule
      ],
      providers:[
        ClaseService,
        HttpService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaseEditarComponent);
    component = fixture.componentInstance;
    claseService= TestBed.inject(ClaseService);
    spyOn(claseService, 'guardar').and.returnValue(
      of(true)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('clase válida',()=>{
    expect(component.form.valid).toBeFalsy();
    component.form.controls.idUsuario.setValue(2);
    component.form.controls.idCurso.setValue(2);
    component.form.controls.fechaInicio.setValue(new Date(Date.now()));
    component.form.controls.fechaFin.setValue(new Date(Date.now()));
    expect(component.form.valid).toBeTruthy();
    
  });
});
