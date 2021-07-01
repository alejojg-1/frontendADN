import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import { UsuarioService } from '../../shared/service/usuario.service';
import { UsuarioModule } from '../../usuario.module';

import { UsuarioEditarComponent } from './usuario-editar.component';

describe('UsuarioEditarComponent', () => {
  let component: UsuarioEditarComponent;
  let fixture: ComponentFixture<UsuarioEditarComponent>;
  let usuarioService: UsuarioService;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioEditarComponent ],
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
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioEditarComponent);
    component = fixture.componentInstance;
    usuarioService=TestBed.inject(UsuarioService)
    spyOn(usuarioService,'editar').and.returnValue(
      of(true)
    )
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('usuario válido para editar',()=>{
    expect(component.form.valid).toBeFalsy();
    component.form.controls.nombre.setValue('usuario');
    component.form.controls.identificacion.setValue(1234);
    expect(component.form.valid).toBeTruthy();
    
  });

});
