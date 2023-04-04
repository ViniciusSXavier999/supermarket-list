var items = [];

// fazendo a função de clicar no input cadastrar
document.querySelector('input[type=submit]').addEventListener('click', function(){

    // Resgatando nome e valor do produto
    var nomeProduto = document.querySelector('input[name=nome_produto]');
    var valorProduto = document.querySelector('input[name=price]');


    // cadastrando o array items

//O método push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array.

    items.push({
        nome: nomeProduto.value,
        valor: valorProduto.value
    });

    /**
     * 
     *   <div class="lista-produtos">
            <div class="lista-produto-single">
                <h3>RedBull</h3>
                <h3 class="price-produto"> <span>R$20,00</span></h3>
            </div>
        </div>
     * 
     */

        let listaProdutos = document.querySelector('.lista-produtos')

        // variavel para somar o valor dos produtos
        let soma = 0

        listaProdutos.innerHTML = "";
        items.map(function(val){
            soma+=parseFloat(val.valor)


            listaProdutos.innerHTML+=`
            <div class="lista-produto-single">
                <h3>`+val.nome+`</h3>
                <h3 class="price-produto"> <span>R$`+val.valor+`</span></h3>
            </div>
            `
        })

        // função do javascript que só vai permitir 2 casas decimais 
        soma = soma.toFixed(2)
        nomeProduto.value = ""
        valorProduto.value = ""

        let elementoSoma = document.querySelector('.soma-produto h1')

        elementoSoma.innerHTML = "R$"+soma;
    

})

document.querySelector('button[class=botao-limpar]').addEventListener('click',function(){
    // para criar o bot]ao limpar vamos esvaziar o items[]
    items = [];

    document.querySelector('.lista-produtos').innerHTML = ""
    document.querySelector('.soma-produto H1').innerHTML = "R$0"
})