class NegociacaoController {
    
    constructor() {
        //cria algo tipo jquery pra pegar id.
        const $ = document.querySelector.bind(document);
        
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();

        this._negocioesView = new NegociacoesView($('#negociacoesView'));

        this._negocioesView.update(this._listaNegociacoes);

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);

    }
    
    adiciona(event) {
        // alert('aqui');
        event.preventDefault();
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._negocioesView.update(this._listaNegociacoes);

        this._mensagem.texto = 'Negociação adicionada com sucesso';
        this._mensagemView.updateQuick(this._mensagem);
        this._limparFormulario();

    }

    _criaNegociacao()
    {
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value  
        );

    }

    _limparFormulario()
    {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }

    apagarLista()
    {
        this._listaNegociacoes.limparLista();

        this._negocioesView.update(this._listaNegociacoes);

        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._mensagem.texto = 'Lista foi Apagada';

        this._mensagemView.updateQuick(this._mensagem);


        this._inputData.focus();
    }
}