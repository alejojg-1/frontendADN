import { by, element } from 'protractor';

export class CursoPage{
    private linkCrearCurso= element(by.css('app-curso-listar #linkCrearCurso'));
    private linkCrearGuardarCurso=element(by.css('app-curso-crear #linkCrearGuardarCurso'));
    private inputCrearNombreCurso= element(by.css('app-curso-crear #inputCrearNombreCurso'));
    private inputCrearTipoCurso= element(by.css('app-curso-crear #inputCrearTipoCurso'));
    private inputCrearDescripcionCurso= element(by.css('app-curso-crear #inputCrearDescripcionCurso'));
    private linkCancelarCrearUsuario=element(by.id('linkCancelarCrearUsuario'));

    private linkEditarCurso=element(by.css('app-curso-listar #linkEditarCurso'));
    private linkEditarGuardarCurso=element(by.id('app-curso-editar #linkEditarGuardarCurso'));
    private inputEditarNombreCurso= element(by.css('app-curso-editar #inputEditarNombreCurso'));
    private inputEditarTipoCurso= element(by.css('app-curso-editar #inputEditarTipoCurso'));
    private inputEditarDescripcionCurso= element(by.css('app-curso-editar #inputEditarDescripcionCurso'));
    private linkCancelarEditarGuardarCurso=element(by.css('app-curso-editar #linkCancelarEditarGuardarCurso'));

    private listaCursos =element(by.id('listaCursos'))

    async clickBotonCrearCurso(){
        await this.linkCrearCurso.click();
    };

    async clickGuardarCurso(){
        await this.linkCrearGuardarCurso.click();
    }

    async clickCancelarGuardarCurso(){
        await this.linkCancelarCrearUsuario.click();
    }

    async ingreasarCrearNombreCurso(nombre){
        await this.inputCrearNombreCurso.sendKeys(nombre);
    }

    async ingreasarCrearTipoCurso(tipo){
        await this.inputCrearTipoCurso.sendKeys(tipo);
    }

    async ingreasarCrearDescripcionCurso(descripcion){
        await this.inputCrearDescripcionCurso.sendKeys(descripcion);
    }



    async clickBotonEditarCurso(){
        await this.linkEditarCurso.click();
    };

    async clickEditarGuardarCurso(){
        await this.linkEditarGuardarCurso.click();
    }

    async clickCancelarEditarGuardarCurso(){
        await this.linkCancelarEditarGuardarCurso.click();
    }

    async ingreasarEditarNombreCurso(nombre){
        await this.inputEditarNombreCurso.sendKeys(nombre);
    }

    async ingreasarEditarTipoCurso(tipo){
        await this.inputEditarTipoCurso.sendKeys(tipo);
    }

    async ingreasarEditarDescripcionCurso(descripcion){
        await this.inputEditarDescripcionCurso.sendKeys(descripcion);
    }


    async contarCursos(){
        return this.listaCursos.count();
    }


}