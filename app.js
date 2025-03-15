//Primeiro criamos a array (lista) para salvar o nome dos amigos:
let listaDeAmigos = []; 

// Criamos a função 'adicionarAmigo', que esta inserida no HTML, deve ser igual para ao clicarmos no botão seja salvo o nome na array listaDeAmigos:
function adicionarAmigo() {
    let nomeDoAmigo = document.getElementById("amigo").value.trim(); 
    if (nomeDoAmigo === "") {
        alert("Por favor, insira um nome válido."); // Validação para evitar nomes vazios
        return;
    }

    listaDeAmigos.push(nomeDoAmigo); // Adiciona o nome à lista

    document.getElementById("amigo").value = ""; // Limpa o campo de entrada após a adição do nome
    atualizarLista(); // Atualiza a exibição da lista
}

// Criação da função para atualizar a lista, inserida acima 'atualizarLista()'
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    listaDeAmigos.forEach((nome) => {
        let item = document.createElement("li"); // Cria um elemento de lista
        item.textContent = nome; // Define o nome no item
        lista.appendChild(item); // Adiciona o item à lista na tela
    });
}

// Por fim, criamos a função para sortear o nome do amigo:
function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("A lista está vazia!"); // Impede o sorteio se não houver nomes
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length); // Escolhe um índice aleatório
    let nomeSorteado = listaDeAmigos[indiceSorteado]; // Obtém o nome correspondente

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>O nome sorteado é: <strong>${nomeSorteado}</strong></li>`; // Exibe o nome sorteado
}
