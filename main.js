// conexao com o json server

async function conexaoComJson(){
    const conexao = await fetch('http://localhost:3000/membros');
    const listaConvertida = await conexao.json();
    console.log(listaConvertida);
    return listaConvertida;
}

// monta o html do card dinamicamente, de acordo com dados de entrada

function constroiCard(foto, nome, cargo){
    const card = document.createElement('li');
    card.className = "card";
    card.innerHTML = `
    <div>
        <img src="${foto}" class="card__imagem" alt="foto do membro">
        <h3>${nome}</h3>
        <p>${cargo}</p>
    </div>`;
    return card;
}

// exibe cards de acordo com o json

const posicaoHtmlLista = document.querySelector('[data-lista]');

async function exibeCards(){
    try{
        const lista = await conexaoComJson();
        lista.forEach(element => {
            posicaoHtmlLista.appendChild(constroiCard(element.foto, element.nome, element.cargo));
        });
    } catch {
        posicaoHtmlLista.innerHTML = `<h2>Não foi possível acessar o JSON </h2>`;
    }
}

exibeCards();
