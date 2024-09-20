const imagens = document.querySelectorAll('img');

imagens.forEach(imagem => {
  // Criando um contêiner flexível para a imagem e o botão
  const container = document.createElement('div');
  container.classList.add('imagem-botao-container');

  // Movendo a imagem para dentro do novo contêiner
  imagem.parentElement.insertBefore(container, imagem);
  container.appendChild(imagem); // Adiciona a imagem ao contêiner

  // Criando o botão "Saber Mais"
  const botao = document.createElement('button');
  botao.textContent = 'Saber Mais';
  botao.classList.add('botao-saber-mais');

  // Criando a lista de opções (Google, Wikipedia)
  const lista = document.createElement('ul');
  lista.classList.add('lista-opcoes');
  lista.style.display = 'none';

  const itemGoogle = document.createElement('li');
  itemGoogle.textContent = 'Google';
  itemGoogle.addEventListener('click', () => {
    window.open(`https://www.google.com/search?q=${imagem.alt}`, '_blank');
    lista.style.display = 'none';
  });

  const itemWiki = document.createElement('li');
  itemWiki.textContent = 'Wikipédia';
  itemWiki.addEventListener('click', () => {
    window.open(`https://pt.wikipedia.org/wiki/${imagem.alt}`, '_blank');
    lista.style.display = 'none';
  });

  lista.appendChild(itemGoogle);
  lista.appendChild(itemWiki);

  // Adicionando o evento de click no botão para exibir a lista de opções
  botao.addEventListener('click', () => {
    lista.style.display = lista.style.display === 'none' ? 'block' : 'none';
  });

  // Adicionando o botão e a lista ao contêiner
  container.appendChild(botao);
  container.appendChild(lista);
});
