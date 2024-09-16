document.addEventListener('DOMContentLoaded', function() {
    // Carregar sintomas iniciais (se necessário)
});




// Função para adicionar os eventos de clique nas divs dos grupos de sintomas
document.addEventListener("DOMContentLoaded", () => {
    const gruposSintomas = document.querySelectorAll(".grupo");
    
    gruposSintomas.forEach(grupo => {
      grupo.addEventListener("click", function() {
        // Captura o nome do grupo de sintomas ao clicar
        const nomeGrupo = this.querySelector(".nome-grupo").innerText;
        
        // Função para exibir os sintomas correspondentes ao grupo selecionado
        mostrarSintomasPorGrupo(nomeGrupo);
      });
    });
  });
  
  // Função que exibe os sintomas do grupo selecionado
  function mostrarSintomasPorGrupo(grupoNome) {
    // Limpa os resultados de pesquisa anteriores
    const resultadosDiv = document.getElementById("resultados-pesquisa");
    resultadosDiv.innerHTML = "";
  
    // Filtra os sintomas que pertencem ao grupo selecionado
    const sintomasFiltrados = dataSintomas.filter(sintoma => sintoma.grupo_sintoma === grupoNome);
  
    // Exibe cada sintoma em uma div separada
    sintomasFiltrados.forEach(sintoma => {
      const sintomaDiv = document.createElement("div");
      sintomaDiv.className = "sintoma";
      sintomaDiv.innerText = sintoma.titulo_sintoma;
  
      // Adiciona o sintoma à lista de sintomas exibidos
      resultadosDiv.appendChild(sintomaDiv);
  
      // Adiciona evento de clique ao sintoma para movê-lo para os sintomas escolhidos
      sintomaDiv.addEventListener("click", function() {
        moverParaSintomasEscolhidos(sintoma);
      });
    });
  }
  
  // Função que move um sintoma para a área de sintomas escolhidos
  function moverParaSintomasEscolhidos(sintoma) {
    const escolhidosDiv = document.getElementById("sintomas-escolhidos");
  
    // Cria uma nova div para o sintoma escolhido
    const sintomaEscolhidoDiv = document.createElement("div");
    sintomaEscolhidoDiv.className = "sintoma-escolhido";
    sintomaEscolhidoDiv.innerText = sintoma.titulo_sintoma;
  
    // Adiciona o sintoma à div de sintomas escolhidos
    escolhidosDiv.appendChild(sintomaEscolhidoDiv);
  }
  


























function pesquisar() {
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
    let resultadosSintomasDiv = document.getElementById("resultados-pesquisa");
    resultadosSintomasDiv.innerHTML = ""; // Limpar resultados anteriores

    // Filtra sintomas que correspondem ao texto digitado
    let sintomasEncontrados = dataSintomas.filter(sintoma => 
        sintoma.titulo_sintoma.toLowerCase().includes(campoPesquisa) ||
        sintoma.grupo_sintoma.toLowerCase().includes(campoPesquisa)
    );

    // Exibir sintomas encontrados
    sintomasEncontrados.forEach(sintoma => {
        let divSintoma = document.createElement('div');
        divSintoma.className = 'sintoma-item';
        divSintoma.style.backgroundColor = getRandomColor(); // Função para cor de fundo aleatória
        divSintoma.textContent = sintoma.titulo_sintoma;
        divSintoma.addEventListener('click', () => adicionarSintomaEscolhido(sintoma));
        resultadosSintomasDiv.appendChild(divSintoma);
    });
}

function adicionarSintomaEscolhido(sintoma) {
    let sintomasEscolhidosDiv = document.getElementById("sintomas-escolhidos");
    let divEscolhido = document.createElement('div');
    divEscolhido.className = 'sintoma-escolhido';
    divEscolhido.textContent = sintoma.titulo_sintoma;
    sintomasEscolhidosDiv.appendChild(divEscolhido);
    
    // Remover o sintoma da lista de sintomas encontrados
    let sintomaItems = document.querySelectorAll('#resultados-pesquisa .sintoma-item');
    sintomaItems.forEach(item => {
        if (item.textContent === sintoma.titulo_sintoma) {
            item.remove();
        }
    });

    // Opcional: Se quiser mostrar as doenças relacionadas, chame uma função aqui
    mostrarDoencasRelacionadas();
}

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

// Função para gerar cor aleatória
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
