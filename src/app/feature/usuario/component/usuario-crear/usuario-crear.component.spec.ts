import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import { UsuarioService } from '../../shared/service/usuario.service';
import { UsuarioModule } from '../../usuario.module';

import { UsuarioCrearComponent } from './usuario-crear.component';

describe('UsuarioCrearComponent', () => {
  let component: UsuarioCrearComponent;
  let fixture: ComponentFixture<UsuarioCrearComponent>;
  let usuarioService: UsuarioService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioCrearComponent ],
      imports:[
        CommonModule,
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule,
        UsuarioModule
      ],
      providers:[
        UsuarioService,
        HttpService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioCrearComponent);
    component = fixture.componentInstance;
    usuarioService = TestBed.inject(UsuarioService);
    spyOn(usuarioService,'guardar').and.returnValue(
      of(true)
    )
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('usuario válido',()=>{
    expect(component.form.valid).toBeFalsy();
    component.form.controls.nombre.setValue('usuario');
    component.form.controls.identificacion.setValue(1234);
    expect(component.form.valid).toBeTruthy();
    
  });
});
