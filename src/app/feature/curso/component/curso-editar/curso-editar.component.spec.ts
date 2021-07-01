import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import { CursoModule } from '../../curso.module';
import { CursoService } from '../../shared/service/curso.service';

import { CursoEditarComponent } from './curso-editar.component';

describe('CursoEditarComponent', () => {
  let component: CursoEditarComponent;
  let fixture: ComponentFixture<CursoEditarComponent>;
  let cursoService: CursoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoEditarComponent ],
      imports:[
        CommonModule,
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule,
        CursoModule
      ],
      providers:[
        CursoService,
        HttpService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoEditarComponent);
    component = fixture.componentInstance;
    cursoService= TestBed.inject(CursoService);
    spyOn(cursoService, 'editar').and.returnValue(
      of(true)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('curso válido',()=>{
    expect(component.form.valid).toBeFalsy();
    component.form.controls.nombre.setValue('curso');
    component.form.controls.tipo.setValue("Universidad");
    component.form.controls.descripcion.setValue("Esto es una prueba")
    expect(component.form.valid).toBeTruthy();
    
  });
});
