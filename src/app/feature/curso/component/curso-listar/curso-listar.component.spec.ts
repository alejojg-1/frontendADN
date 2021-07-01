import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import { Curso } from '../../shared/model/curso.model';
import { CursoService } from '../../shared/service/curso.service';

import { CursoListarComponent } from './curso-listar.component';

describe('CursoListarComponent', () => {
  let component: CursoListarComponent;
  let fixture: ComponentFixture<CursoListarComponent>;
  let cursoService: CursoService
  const listacursos:Curso[]=[
    new Curso(1,"matematica","universidad",20000,"esto es una prueba"),
    new Curso(2,"matematica","secundaria",15000,"esto es una prueba")
  ]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoListarComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ]
      ,providers:[
        CursoService,
        HttpService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoListarComponent);
    component = fixture.componentInstance;
    cursoService=TestBed.inject(CursoService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Listar todos los cursos', ()=>{
    var spy =spyOn(cursoService,'consultar').and.callFake(()=>{
      return of(listacursos);
    })
    component.fetchUsuarios();
    expect(spy).toHaveBeenCalled();  
  });
});
