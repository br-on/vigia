document.addEventListener('DOMContentLoaded', function () {
    // Carregar sintomas iniciais (se necessário)
});

// Função para mostrar ou ocultar grupos de sintomas
function mostrarSintomasPorGrupos() {
    var gruposSintomas = document.querySelector('.grupos-sintomas');
    var resultadosPesquisa = document.getElementById('resultados-pesquisa');
    
    if (gruposSintomas.style.display === 'none' || gruposSintomas.style.display === '') {
      gruposSintomas.style.display = 'block';
      resultadosPesquisa.style.display = 'none';
    } else {
      gruposSintomas.style.display = 'none';
    }
}

// Função para exibir a overlay-div com sintomas do grupo selecionado
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

    // Filtrar sintomas pelo grupo e que não foram escolhidos
    const sintomasEncontrados = dataSintomas.filter(sintoma => 
        sintoma.grupo_sintoma.toLowerCase() === grupoId.toLowerCase() &&
        !sintomasEscolhidos.includes(sintoma.titulo_sintoma)
    );

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

    // Clona o conteúdo da div do grupo e insere na top-2
    const grupoDivClone = grupoDiv.cloneNode(true);
    top2Div.innerHTML = '';
    top2Div.appendChild(grupoDivClone);

    // Exibe a overlay-div
    overlayDiv.classList.remove('display-off');
    overlayDiv.classList.add('display-on');
}

// Função para ocultar a overlay-div
function ocultarOverlay() {
    const overlayDiv = document.querySelector('.overlay-div');
    overlayDiv.classList.remove('display-on');
    overlayDiv.classList.add('display-off');
}

// Configurar eventos de clique nos grupos e no botão Voltar
function configurarEventosDeCliqueNosGrupos() {
    const grupos = document.querySelectorAll('.grupo');
    grupos.forEach(grupo => {
        grupo.addEventListener('click', () => {
            exibirSintomasPorGrupo(grupo.id);
        });
    });

    const backButton = document.querySelector('.top-1 button');
    backButton.addEventListener('click', () => {
        ocultarOverlay();
    });
}

// Chama a função quando a página carrega
window.onload = configurarEventosDeCliqueNosGrupos;

// Função do botão pesquisar
function pesquisar() {
    var gruposSintomas = document.querySelector('.grupos-sintomas');
    var resultadosPesquisa = document.getElementById('resultados-pesquisa');
    
    gruposSintomas.style.display = 'none';
    resultadosPesquisa.style.display = 'block';

    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
    let resultadosSintomasDiv = document.getElementById("resultados-pesquisa");
    resultadosSintomasDiv.innerHTML = "";

    let sintomasEscolhidos = Array.from(document.getElementById("sintomas-escolhidos").children)
        .map(div => div.textContent);

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

// Função para adicionar sintoma escolhido
function adicionarSintomaEscolhido(sintoma, grupoId) {
    let sintomasEscolhidosDiv = document.getElementById("sintomas-escolhidos");

    let sintomaJaEscolhido = Array.from(sintomasEscolhidosDiv.children).some(div => div.textContent === sintoma.titulo_sintoma);
    if (sintomaJaEscolhido) return;

    let divEscolhido = document.createElement('div');
    divEscolhido.className = 'sintoma-escolhido';
    divEscolhido.textContent = sintoma.titulo_sintoma;

    divEscolhido.style.backgroundColor = coresPorGrupo[grupoId.toLowerCase()] || '#ccc';

    divEscolhido.addEventListener('click', () => removerSintomaEscolhido(sintoma));

    sintomasEscolhidosDiv.appendChild(divEscolhido);

    let sintomasEncontrados = document.querySelectorAll('#resultados-pesquisa .sintoma-item');
    sintomasEncontrados.forEach(item => {
        if (item.textContent === sintoma.titulo_sintoma) {
            item.remove();
        }
    });

    mostrarDoencasRelacionadas();
}

// Função para remover sintoma escolhido
function removerSintomaEscolhido(sintoma) {
    let sintomasEscolhidosDiv = document.getElementById("sintomas-escolhidos");

    Array.from(sintomasEscolhidosDiv.children).forEach(div => {
        if (div.textContent === sintoma.titulo_sintoma) {
            div.remove();
        }
    });

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

// Função para mostrar doenças relacionadas aos sintomas escolhidos
function mostrarDoencasRelacionadas() {
    let sintomasEscolhidosDiv = document.getElementById("sintomas-escolhidos");
    let sintomasEscolhidos = Array.from(sintomasEscolhidosDiv.children).map(div => div.textContent.trim().toLowerCase());

    let resultadosDoencasDiv = document.getElementById("resultados-doencas");
    resultadosDoencasDiv.innerHTML = "";

    dataDoencas.forEach(doenca => {
        let sintomasDoenca = doenca.sintomas.toLowerCase().split(',').map(s => s.trim());

        let correspondeSintomas = sintomasEscolhidos.every(sintomaEscolhido => 
            sintomasDoenca.includes(sintomaEscolhido)
        );

        if (correspondeSintomas) {
            resultadosDoencasDiv.innerHTML += `
                <div class="item-resultado">                    
                    <center><h2 class="black-ops-one-regular">${doenca.titulo}</h2></center>
                    <h4 class="electrolize-regular">Descrição</h4>
                    <p class="descricao-meta">${doenca.descricao}</p>
                    <h4 class="electrolize-regular">Sintomas</h4>
                    <p class="descricao-meta">${doenca.sintomas}</p>
                    <h4 class="electrolize-regular">Prevenção</h4>
                    <p class="descricao-meta">${doenca.prevencao}</p>
                    <h4 class="electrolize-regular">Tratamento</h4>
                    <p class="descricao-meta">${doenca.tratamento}</p>
                    <a href="${doenca.link}" target="_blank">${doenca.link}</a>
                </div>
            `;
        }
    });
}
