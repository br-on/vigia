document.addEventListener('DOMContentLoaded', function () {
    // Carregar sintomas iniciais (se necessário)
});

// Função para exibir os sintomas ao clicar em um grupo
function exibirSintomasPorGrupo(grupoId) {
    // Encontrar a div overlay e a div onde os sintomas aparecerão
    const overlayDiv = document.querySelector('.overlay-div');
    const sintomasGrupoDiv = document.querySelector('.sintomas-grupo');

    // Limpa o conteúdo anterior de sintomas
    sintomasGrupoDiv.innerHTML = '';

    // Filtrar os sintomas que pertencem ao grupo selecionado
    const sintomasDoGrupo = dataSintomas.filter(sintoma => sintoma.grupo_sintoma === grupoId);

    if (sintomasDoGrupo.length > 0) {
        sintomasDoGrupo.forEach(sintoma => {
            // Cria uma div para cada sintoma com seus detalhes
            const sintomaDiv = document.createElement('div');
            sintomaDiv.classList.add('sintoma');

            // Adiciona o título do sintoma
            const tituloSintoma = document.createElement('h3');
            tituloSintoma.textContent = sintoma.titulo_sintoma;
            sintomaDiv.appendChild(tituloSintoma);

            // Adiciona a descrição do sintoma
            const descricaoSintoma = document.createElement('p');
            descricaoSintoma.textContent = sintoma.descricao_sintoma;
            sintomaDiv.appendChild(descricaoSintoma);

            // Adiciona as tags do sintoma
            const tagsSintoma = document.createElement('p');
            tagsSintoma.textContent = `Tags: ${sintoma.tags}`;
            tagsSintoma.style.fontStyle = "italic";
            sintomaDiv.appendChild(tagsSintoma);

            // Adiciona o sintoma na div de sintomas do grupo
            sintomasGrupoDiv.appendChild(sintomaDiv);
        });

        // Exibe a overlay-div
        overlayDiv.style.display = 'flex';
    }
}



function configurarEventosDeCliqueNosGrupos() {
    const grupos = document.querySelectorAll('.grupo');
    const overlayDiv = document.querySelector('.overlay-div');
    const top2Div = document.querySelector('.top-2');

    grupos.forEach(grupo => {
        grupo.addEventListener('click', function() {
            const grupoId = grupo.getAttribute('data-grupo-id');
            
            // Move o grupo clicado para a .top-2
            top2Div.innerHTML = ''; // Limpa o conteúdo anterior
            const grupoClone = grupo.cloneNode(true); // Clona a div do grupo
            top2Div.appendChild(grupoClone); // Adiciona a div clonada ao top-2

            // Exibe os sintomas associados ao grupo clicado
            exibirSintomasPorGrupo(grupoId);
        });
    });

    // Adiciona evento de clique na div .top-2 para fechar a overlay e restaurar o grupo
    top2Div.addEventListener('click', function() {
        // Oculta a overlay-div
        overlayDiv.style.display = 'none';

        // Remove o conteúdo de .top-2 e restaurar a div ao seu lugar original
        top2Div.innerHTML = '';
    });
}





function exibirDoencasPorGrupo(grupoId) {
    // Encontre a div onde as doenças serão exibidas
    const doencasGrupoDiv = document.querySelector('.doencas-grupo');
    
    // Limpe o conteúdo anterior de doenças
    doencasGrupoDiv.innerHTML = '';

    // Procure as doenças relacionadas ao grupo (por exemplo, mapeando pelo grupoId)
    const grupoDoencas = dataDoencas.filter(doenca => doenca.tags.includes(grupoId));

    if (grupoDoencas.length > 0) {
        // Para cada doença relacionada, crie um bloco de informações
        grupoDoencas.forEach(doenca => {
            // Cria um container para cada doença
            const doencaDiv = document.createElement('div');
            doencaDiv.classList.add('doenca-container');

            // Adiciona o título da doença
            const titulo = document.createElement('h3');
            titulo.textContent = doenca.titulo;
            doencaDiv.appendChild(titulo);

            // Adiciona a descrição
            const descricao = document.createElement('p');
            descricao.textContent = `Descrição: ${doenca.descricao}`;
            doencaDiv.appendChild(descricao);

            // Adiciona os sintomas
            const sintomas = document.createElement('p');
            sintomas.textContent = `Sintomas: ${doenca.sintomas}`;
            doencaDiv.appendChild(sintomas);

            // Adiciona a prevenção
            const prevencao = document.createElement('p');
            prevencao.textContent = `Prevenção: ${doenca.prevencao}`;
            doencaDiv.appendChild(prevencao);

            // Adiciona o tratamento
            const tratamento = document.createElement('p');
            tratamento.textContent = `Tratamento: ${doenca.tratamento}`;
            doencaDiv.appendChild(tratamento);

            // Adiciona o link
            const link = document.createElement('a');
            link.href = doenca.link;
            link.textContent = "Saiba mais";
            link.target = "_blank"; // Abrir em nova aba
            doencaDiv.appendChild(link);

            // Adiciona o container da doença à div de exibição
            doencasGrupoDiv.appendChild(doencaDiv);
        });
    } else {
        // Exibe uma mensagem caso não haja doenças mapeadas para o grupo
        doencasGrupoDiv.textContent = 'Nenhuma doença disponível para este grupo.';
    }
}

// Chama essa função quando a página carrega
window.onload = configurarEventosDeCliqueNosGrupos;

// Função do botão pesquisar
function pesquisar() {
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
    let sintomaJaEscolhido = Array.from(sintomasEscolhidosDiv.children).some(div => div.textContent === sintoma.titulo_sintoma);
    if (sintomaJaEscolhido) return; // Evita adicionar o mesmo sintoma mais de uma vez

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
    
    // Atribuir cor do grupo
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


