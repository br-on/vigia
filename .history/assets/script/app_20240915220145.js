document.addEventListener('DOMContentLoaded', function() {
    configurarEventosDeCliqueNosGrupos(); // Configurar eventos de clique nos grupos ao carregar
});

// Armazenar sintomas escolhidos
let sintomasEscolhidos = [];

// Função para exibir os sintomas ao clicar em um grupo
function exibirSintomasPorGrupo(grupoId) {
    let resultadosSintomasDiv = document.getElementById("resultados-pesquisa");
    resultadosSintomasDiv.innerHTML = ""; // Limpar resultados anteriores

    // Filtrar sintomas pelo grupo clicado e que não estejam já escolhidos
    let sintomasEncontrados = dataSintomas.filter(sintoma => 
        sintoma.grupo_sintoma.toLowerCase() === grupoId.toLowerCase() &&
        !sintomasEscolhidos.includes(sintoma.titulo_sintoma) // Excluir já escolhidos
    );

    // Exibir sintomas filtrados
    if (sintomasEncontrados.length > 0) {
        sintomasEncontrados.forEach(sintoma => {
            let divSintoma = document.createElement('div');
            divSintoma.className = 'sintoma-item';

            // Atribui cor específica baseada no grupo do sintoma
            divSintoma.style.backgroundColor = coresPorGrupo[grupoId.toLowerCase()] || '#ccc'; // Se não houver cor definida, usa cinza

            divSintoma.textContent = sintoma.titulo_sintoma;
            divSintoma.addEventListener('click', () => adicionarSintomaEscolhido(sintoma));
            resultadosSintomasDiv.appendChild(divSintoma);
        });
    } else {
        resultadosSintomasDiv.innerHTML = '<p>Nenhum sintoma encontrado para este grupo.</p>';
    }
}

// Função para configurar o clique nos grupos
function configurarEventosDeCliqueNosGrupos() {
    // Seleciona todas as divs de grupos de sintomas
    const grupos = document.querySelectorAll('.grupo');

    // Adiciona o evento de clique para cada grupo
    grupos.forEach(grupo => {
        grupo.addEventListener('click', () => {
            exibirSintomasPorGrupo(grupo.id); // Exibe sintomas ao clicar no grupo
        });
    });
}

// Função do botão pesquisar
function pesquisar() {
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
    let resultadosSintomasDiv = document.getElementById("resultados-pesquisa");
    resultadosSintomasDiv.innerHTML = ""; // Limpar resultados anteriores

    // Filtra sintomas que correspondem ao texto digitado e que ainda não foram escolhidos
    let sintomasEncontrados = dataSintomas.filter(sintoma => 
        (sintoma.titulo_sintoma.toLowerCase().includes(campoPesquisa) ||
        sintoma.grupo_sintoma.toLowerCase().includes(campoPesquisa)) &&
        !sintomasEscolhidos.includes(sintoma.titulo_sintoma) // Excluir já escolhidos
    );

    // Exibir sintomas encontrados
    sintomasEncontrados.forEach(sintoma => {
        let divSintoma = document.createElement('div');
        divSintoma.className = 'sintoma-item';
        
        // Atribui a cor do grupo baseado no grupo_sintoma do objeto coresPorGrupo
        let grupoId = sintoma.grupo_sintoma.toLowerCase().replace(/\s/g, '-'); // Converte espaços para hífens se necessário
        divSintoma.style.backgroundColor = coresPorGrupo[grupoId] || '#ccc'; // Usa cor padrão se grupo não for encontrado

        divSintoma.textContent = sintoma.titulo_sintoma;
        divSintoma.addEventListener('click', () => adicionarSintomaEscolhido(sintoma));
        resultadosSintomasDiv.appendChild(divSintoma);
    });
}

// Função para adicionar um sintoma à div "sintomas-escolhidos"
function adicionarSintomaEscolhido(sintoma) {
    let sintomasEscolhidosDiv = document.getElementById("sintomas-escolhidos");

    // Verifica se o sintoma já foi escolhido
    if (sintomasEscolhidos.includes(sintoma.titulo_sintoma)) return;

    // Adiciona o sintoma à lista de escolhidos
    sintomasEscolhidos.push(sintoma.titulo_sintoma);

    let divEscolhido = document.createElement('div');
    divEscolhido.className = 'sintoma-escolhido';

    // Atribui a cor correspondente ao grupo
    let grupoId = sintoma.grupo_sintoma.toLowerCase().replace(/\s/g, '-');
    divEscolhido.style.backgroundColor = coresPorGrupo[grupoId] || '#ccc';

    divEscolhido.textContent = sintoma.titulo_sintoma;
    
    // Evento de clique para remover o sintoma escolhido
    divEscolhido.addEventListener('click', () => removerSintomaEscolhido(sintoma));

    sintomasEscolhidosDiv.appendChild(divEscolhido);
    
    // Atualiza a listagem de sintomas removendo os que já foram escolhidos
    pesquisar();
}

// Função para remover um sintoma da div "sintomas-escolhidos"
function removerSintomaEscolhido(sintoma) {
    let sintomasEscolhidosDiv = document.getElementById("sintomas-escolhidos");
    
    // Remove o sintoma da lista de escolhidos
    sintomasEscolhidos = sintomasEscolhidos.filter(escolhido => escolhido !== sintoma.titulo_sintoma);
    
    // Remove a div correspondente
    Array.from(sintomasEscolhidosDiv.children).forEach(child => {
        if (child.textContent === sintoma.titulo_sintoma) {
            child.remove();
        }
    });
    
    // Atualiza a listagem de sintomas, reinserindo o que foi removido da escolha
    pesquisar();
}

// Função para exibir doenças relacionadas aos sintomas escolhidos
function mostrarDoencasRelacionadas() {
    let sintomasEscolhidosDiv = document.getElementById("sintomas-escolhidos");
    let sintomasEscolhidos = Array.from(sintomasEscolhidosDiv.children).map(div => div.textContent);

    let resultadosDoencasDiv = document.getElementById("resultados-doencas");
    resultadosDoencasDiv.innerHTML = ""; // Limpar resultados anteriores

    dataDoencas.forEach(doenca => {
        let sintomasDoenca = doenca.sintomas.toLowerCase().split(',').map(s => s.trim());
        let correspondeSintomas = sintomasEscolhidos.every(s => sintomasDoenca.includes(s.toLowerCase()));

        if (correspondeSintomas) {
            resultadosDoencasDiv.innerHTML += `
                <div class="item-resultado">
                    <h2 class="black-ops-one-regular">${doenca.titulo}</h2>
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
