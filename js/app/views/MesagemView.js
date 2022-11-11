class MensagemView extends View{

    constructor(elemento)
    {
        super(elemento);
    }


    template(model)
    {
        return model.texto ? `<p class="alert alert-secondary">${model.texto}</p>` : `<p></p>`;
    }
}