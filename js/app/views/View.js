class View {

    constructor(elemento)
    {
        this._elemento = elemento;
    }

    _template(model)
    {
        throw new Error('O metodo template deve ser implementado');

    }

    update(model)
    {
        this._elemento.innerHTML = this.template(model)
    }

    updateQuick(model)
    {
        this._elemento.innerHTML = this.template(model)

        setTimeout(() => {
            this._elemento.innerHTML = this.template(false);
        }, 4000);
    }

}