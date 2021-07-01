import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import { Clase } from '../../shared/model/clase.model';
import { ClaseService } from '../../shared/service/clase.service';

import { ClaseListarComponent } from './clase-listar.component';

describe('ClaseListarComponent', () => {
  let component: ClaseListarComponent;
  let fixture: ComponentFixture<ClaseListarComponent>;
  let claseService: ClaseService
  const listaclases:Clase[]=[
    new Clase(1,1,1,new Date(Date.now()),new Date(Date.now()),10000),
    new Clase(2,1,1,new Date(Date.now()),new Date(Date.now()),15000),
  ]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaseListarComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ]
      ,providers:[
        ClaseService,
        HttpService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaseListarComponent);
    component = fixture.componentInstance;
    claseService=TestBed.inject(ClaseService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Listar todos los cursos', ()=>{
    var spy =spyOn(claseService,'consultar').and.callFake(()=>{
      return of(listaclases);
    })
    component.fetchClases();
    expect(spy).toHaveBeenCalled();  
  });
});
