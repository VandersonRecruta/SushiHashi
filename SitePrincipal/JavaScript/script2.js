var comprar = document.querySelector('#comprar');
var respCompra = document.querySelector('#respCompra');

comprar.addEventListener('click', VeriCompra);

function VeriCompra() {
    const opcoesPagamento = document.querySelectorAll('.Pague');
    let comprou = false;

    opcoesPagamento.forEach(function(opcao) {
        if (opcao.checked) {
            comprou = true;
        }
    });

    if (!comprou) {
        respCompra.innerHTML = 'Selecione a forma de pagamento!';
        respCompra.style.color = 'red'; // Altera a cor do texto para vermelho
    } else {
        respCompra.innerHTML = 'Compra efetuada com sucesso!';
        respCompra.style.color = ''; // Volta para a cor padrão do elemento
        setTimeout(function(){
            let resposta = confirm('Poderia nos avaliar?')
            if (resposta){
            window.location.href = 'http://127.0.0.1:5500/PROVA%20FINAL/SitePrincipal/pages/pesquisa.html';
            } 
        }, 800)
        

    }
}
 
