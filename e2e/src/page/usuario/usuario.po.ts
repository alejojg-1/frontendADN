import { by, element } from 'protractor';

export class UsuarioPage{
    private linkCrearUsuario= element(by.id('linkCrearUsuario'));
    private linkGuardarUsuario=element(by.id('linkGuardarUusario'));
    private inputCrearNombreUsuario= element(by.id('inputCrearNombreUsuario'));
    private inputCrearIdentificacionUsuario= element(by.id('inputCrearIdentificacionUsuario'));
    private linkCancelarCrearUsuario=element(by.id('linkCancelarCrearUsuario'));

    private linkEditarUsuario=element(by.id('linkEditarUsuario'));
    private LinkEditarUsuarioGuardar=element(by.id('LinkEditarUsuarioGuardar'));
    private inputEditarUsuarioNombre= element(by.id('inputEditarUsuarioNombre'));
    private inputEditarUsuarioIdentificacion= element(by.id('inputEditarUsuarioIdentificacion'));
    private LinkCancelarEditarUsuario=element(by.id('LinkCancelarEditarUsuario'));

    private listaUsuarios =element(by.id('listaUsuarios'))

    async clickBotonCrearUsuario(){
        await this.linkCrearUsuario.click();
    };

    async clickGuardarUsuario(){
        await this.linkGuardarUsuario.click();
    }

    async clickCancelarGuardarUsuario(){
        await this.linkCancelarCrearUsuario.click();
    }

    async ingreasarCrearNombreUsuario(nombre){
        await this.inputCrearNombreUsuario.sendKeys(nombre);
    }

    async ingreasarCrearIdentificacionUsuario(identificacion){
        await this.inputCrearIdentificacionUsuario.sendKeys(identificacion);
    }


    async clickBotonEditarUsuario(){
        await this.linkEditarUsuario.click();
    };

    async clickEditarGuardarUsuario(){
        await this.LinkEditarUsuarioGuardar.click();
    }

    async clickCancelarEditarGuardarUsuario(){
        await this.LinkCancelarEditarUsuario.click();
    }

    async ingreasarEditarNombreUsuario(nombre){
        await this.inputEditarUsuarioNombre.sendKeys(nombre);
    }

    async ingreasarEditarIdentificacionUsuario(identificacion){
        await this.inputEditarUsuarioIdentificacion.sendKeys(identificacion);
    }


    async contarUsuarios(){
        return this.listaUsuarios.count();
    }


}