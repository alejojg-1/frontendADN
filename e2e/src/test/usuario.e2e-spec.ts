import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import {UsuarioPage} from '../page/usuario/usuario.po';

describe('Worksapace -project Usuario', ()=>{
    let page:AppPage;
    let navbar: NavbarPage;
    let usuario: UsuarioPage;

    beforeEach(()=>{
        page = new AppPage();
        navbar = new NavbarPage();
        usuario = new UsuarioPage();

    });

    it('Deberia listar usuarios', ()=>{
        page.navigateTo();
        navbar.clickBotonUsuarios();

        expect(0).toBe(usuario.contarUsuarios());
    });

    it('Debería crear un usuario', ()=>{
        const NOMBRE_USUARIO='Prueba funcional'
        const IDENTIFICACION_USUARIO=5000;
        
        page.navigateTo();
        navbar.clickBotonUsuarios();
        usuario.clickBotonCrearUsuario();
        usuario.ingreasarCrearNombreUsuario(NOMBRE_USUARIO);
        usuario.ingreasarCrearIdentificacionUsuario(IDENTIFICACION_USUARIO);
        usuario.clickGuardarUsuario();

        // Adicionar válidaciónes
    });

    it('Debería editar un usuario', ()=>{
        const NOMBRE_USUARIO='Prueba funcional editando'
        const IDENTIFICACION_USUARIO=5000;

        page.navigateTo();
        navbar.clickBotonUsuarios();
        usuario.clickBotonEditarUsuario();
        usuario.ingreasarEditarNombreUsuario(NOMBRE_USUARIO);
        usuario.ingreasarEditarIdentificacionUsuario(IDENTIFICACION_USUARIO);
        usuario.clickEditarGuardarUsuario();

        // Adicionar válidaciones

    })


});
