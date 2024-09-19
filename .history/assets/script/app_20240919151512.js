document.addEventListener('DOMContentLoaded', function () {
    // Inicialmente, ocultar a div #resultados-pesquisa
    const resultadosPesquisa = document.getElementById('resultados-pesquisa');
    resultadosPesquisa.style.display = 'none';
    
    // Configurar eventos de clique nos grupos e no botão Voltar
    configurarEventosDeCliqueNosGrupos();
});

const grupoSintomas = document.querySelector('.grupos-sintomas');
const resultadosPesquisa = document.querySelector('#resultados-pesquisa');

resultadosPesquisa.style.width = `${grupoSintomas.offsetWidth}px`;
resultadosPesquisa.style.height = `${grupoSintomas.offsetHeight}px`;



function configurarEventosDeCliqueNosGrupos() {
    // Seleciona todas as divs de grupos de sintomas
    const grupos = document.querySelectorAll('.grupo');
    
    // Adiciona o evento de clique para cada grupo
    grupos.forEach(grupo => {
        grupo.addEventListener('click', () => {
            exibirSintomasPorGrupo(grupo.id);
        });
    });
    
    // Adiciona evento de clique ao botão Voltar
    const backButton = document.querySelector('.top-1 button');
    backButton.addEventListener('click', ocultarOverlay);
}

function exibirSintomasPorGrupo(grupoId) {
    const overlayDiv = document.querySelector('.overlay-div');
    const resultadosSintomasDiv = document.getElementById("resultados-pesquisa-grupo");
    const top2Div = document.querySelector('.top-2');
    const grupoDiv = document.getElementById(grupoId);

    // Limpa resultados anteriores
    resultadosSintomasDiv.innerHTML = "";

    // Obter sintomas já escolhidos
    const sintomasEscolhidos = Array.from(document.getElementById("sintomas-escolhidos").children)
        .map(div => div.textContent);

    // Filtrar sintomas pelo grupo clicado e que não foram escolhidos
    const sintomasEncontrados = dataSintomas.filter(sintoma => 
        sintoma.grupo_sintoma.toLowerCase() === grupoId.toLowerCase() &&
        !sintomasEscolhidos.includes(sintoma.titulo_sintoma)
    );

    // Exibir sintomas encontrados ou mensagem de "nenhum sintoma encontrado"
    if (sintomasEncontrados.length > 0) {
        sintomasEncontrados.forEach(sintoma => {
            const divSintoma = document.createElement('div');
            divSintoma.className = 'sintoma-item';
            divSintoma.style.backgroundColor = coresPorGrupo[grupoId.toLowerCase()] || '#ccc';
            divSintoma.textContent = sintoma.titulo_sintoma;
            divSintoma.addEventListener('click', () => adicionarSintomaEscolhido(sintoma, grupoId));
            resultadosSintomasDiv.appendChild(divSintoma);
        });
    } else {
        resultadosSintomasDiv.innerHTML = '<p>Nenhum sintoma encontrado para este grupo.</p>';
    }

    // Clona o conteúdo da div do grupo selecionado e insere na top-2
    const grupoDivClone = grupoDiv.cloneNode(true);
    top2Div.innerHTML = ''; // Limpa a top-2 antes de adicionar o clone
    top2Div.appendChild(grupoDivClone);

    // Exibe a overlay-div
    overlayDiv.classList.remove('display-off');
    overlayDiv.classList.add('display-on');
}

function ocultarOverlay() {
    const overlayDiv = document.querySelector('.overlay-div');
    overlayDiv.classList.remove('display-on');
    overlayDiv.classList.add('display-off');
}

function mostrarGrupos() {
    document.getElementById('resultados-pesquisa').style.display = 'none';
    document.getElementById('grupos-sintomas').style.display = 'block';
}

function pesquisar() {
    document.getElementById('grupos-sintomas').style.display = 'none';
    document.getElementById('resultados-pesquisa').style.display = 'block';
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
    let resultadosSintomasDiv = document.getElementById("resultados-pesquisa");
    resultadosSintomasDiv.innerHTML = ""; // Limpar resultados anteriores

    // Obter sintomas já escolhidos
    let sintomasEscolhidos = Array.from(document.getElementById("sintomas-escolhidos").children)
        .map(div => div.textContent);

    // Filtrar sintomas que correspondem ao texto digitado e que não foram escolhidos
    let sintomasEncontrados = dataSintomas.filter(sintoma => 
        (sintoma.titulo_sintoma.toLowerCase().includes(campoPesquisa) ||
        sintoma.grupo_sintoma.toLowerCase().includes(campoPesquisa)) &&
        !sintomasEscolhidos.includes(sintoma.titulo_sintoma)
    );

    sintomasEncontrados.forEach(sintoma => {
        let divSintoma = document.createElement('div');
        divSintoma.className = 'sintoma-item';
        
        let grupoId = sintoma.grupo_sintoma.toLowerCase().replace(/\s/g, '-');
        divSintoma.style.backgroundColor = coresPorGrupo[grupoId] || '#ccc';

        divSintoma.textContent = sintoma.titulo_sintoma;
        divSintoma.addEventListener('click', () => adicionarSintomaEscolhido(sintoma, grupoId));
        resultadosSintomasDiv.appendChild(divSintoma);
    });
}

function adicionarSintomaEscolhido(sintoma, grupoId) {
    let sintomasEscolhidosDiv = document.getElementById("sintomas-escolhidos");

    // Verifica se o sintoma já foi escolhido
    if (Array.from(sintomasEscolhidosDiv.children).some(div => div.textContent === sintoma.titulo_sintoma)) return;

    let divEscolhido = document.createElement('div');
    divEscolhido.className = 'sintoma-escolhido';
    divEscolhido.textContent = sintoma.titulo_sintoma;

    // Aplicar a cor do grupo ao sintoma escolhido
    divEscolhido.style.backgroundColor = coresPorGrupo[grupoId.toLowerCase()] || '#ccc';

    // Adiciona o evento de clique para remover o sintoma da lista escolhida
    divEscolhido.addEventListener('click', () => removerSintomaEscolhido(sintoma));

    sintomasEscolhidosDiv.appendChild(divEscolhido);

    // Remover o sintoma da lista de sintomas encontrados
    let sintomasEncontrados = document.querySelectorAll('#resultados-pesquisa .sintoma-item');
    sintomasEncontrados.forEach(item => {
        if (item.textContent === sintoma.titulo_sintoma) {
            item.remove();
        }
    });

    mostrarDoencasRelacionadas();
}

function removerSintomaEscolhido(sintoma) {
    let sintomasEscolhidosDiv = document.getElementById("sintomas-escolhidos");

    // Encontrar e remover o sintoma da lista de escolhidos
    Array.from(sintomasEscolhidosDiv.children).forEach(div => {
        if (div.textContent === sintoma.titulo_sintoma) {
            div.remove();
        }
    });

    // Reexibir o sintoma na lista de pesquisa ou na lista de grupo
    let resultadosSintomasDiv = document.getElementById("resultados-pesquisa");

    let divSintoma = document.createElement('div');
    divSintoma.className = 'sintoma-item';
    
    let grupoId = sintoma.grupo_sintoma.toLowerCase().replace(/\s/g, '-');
    divSintoma.style.backgroundColor = coresPorGrupo[grupoId] || '#ccc';

    divSintoma.textContent = sintoma.titulo_sintoma;
    divSintoma.addEventListener('click', () => adicionarSintomaEscolhido(sintoma, grupoId));
    resultadosSintomasDiv.appendChild(divSintoma);

    mostrarDoencasRelacionadas();
}

function mostrarDoencasRelacionadas() {
    let sintomasEscolhidosDiv = document.getElementById("sintomas-escolhidos");
    let sintomasEscolhidos = Array.from(sintomasEscolhidosDiv.children).map(div => div.textContent.trim().toLowerCase());

    let resultadosDoencasDiv = document.getElementById("resultados-doencas");
    resultadosDoencasDiv.innerHTML = ""; // Limpar resultados anteriores

    // Percorre cada doença no array dataDoencas
    dataDoencas.forEach(doenca => {
        // Divide os sintomas da doença em um array e remove espaços extras
        let sintomasDoenca = doenca.sintomas.toLowerCase().split(',').map(s => s.trim());

        // Verifica se todos os sintomas escolhidos estão incluídos nos sintomas da doença
        let correspondeSintomas = sintomasEscolhidos.every(sintomaEscolhido => 
            sintomasDoenca.includes(sintomaEscolhido)
        );

        // Se todos os sintomas escolhidos estiverem presentes, exibe a doença
        if (correspondeSintomas) {
            resultadosDoencasDiv.innerHTML += `
                <div class="item-resultado">
                    <center><h2 class="black-ops-one-regular">${doenca.titulo}</h2></center>
                    <h4 class="electrolize-regular">Descrição</h4>
                    <p class="descricao-meta">${doenca.descricao}</p>
                    <h4 class="electrolize-regular">Sintomas</h4>
                    <p class="descricao-meta">${doenca.sintomas}</p>
                </div>`;
        }
    });
}
