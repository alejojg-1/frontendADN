import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import { Usuario } from '../../shared/model/usuario';
import { UsuarioService } from '../../shared/service/usuario.service';

import { UsuarioListarComponent } from './usuario-listar.component';

describe('UsuarioListarComponent', () => {
  let component: UsuarioListarComponent;
  let fixture: ComponentFixture<UsuarioListarComponent>;
  let usuarioService: UsuarioService;
  const listaUsuarios: Usuario[] = [
    new Usuario(1, "Usuario 1", 12345),
    new Usuario(2, "Usuario 2", 98765),
  ];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        UsuarioListarComponent
      ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers:[
        UsuarioService,
        HttpService
      ]
    }).compileComponents();
  }));

  beforeEach(()=>{
    fixture=TestBed.createComponent(UsuarioListarComponent);
    component =fixture.componentInstance;
    usuarioService =TestBed.inject(UsuarioService);
    fixture.detectChanges();
  })

  it('Listar todos los usauarios', ()=>{
    var spy =spyOn(usuarioService,'consultar').and.callFake(()=>{
      return of(listaUsuarios);
    })
    component.fetchUsuarios();
    expect(spy).toHaveBeenCalled();  
  });


});


