# Bio Camila Gatelli

Protótipo público da vitrine de curadorias de @cami.gatelli.

## Estrutura

- `index.html`: home compacta, filtros por assunto, busca, prévia das publicações e quatro produtos por curadoria.
- `curadoria.html?tema=casa`: página própria para cada seleção. O exemplo de Casa simula 40 itens, busca local e botão **Carregar mais** de 12 em 12.
- `midia-kit.html`: acesso provisório à apresentação de mídia kit no Canva.

## O que ainda precisa ser conectado

A seleção de produtos, as categorias, a ordem dos posts e os links de afiliado são exemplos no HTML. Na implementação final, o painel autenticado de edição ficará dentro da BIO MoodLabs (`bio.moodlabs.com.br`, endereço a confirmar), e este site público lerá os dados publicados por esse painel. Camila poderá criar, renomear, reordenar e ocultar categorias; editar curadorias; adicionar ou retirar produtos e cupons. A home exibirá a capa da mídia publicada pelo Edit/Instagram, sem upload extra de thumbnail.

O domínio próprio público ainda será comprado; use URLs relativas para que funcione em qualquer domínio. O PDF enviado da apresentação ainda não está hospedado no repositório. Assim que houver um arquivo público e aprovado, coloque-o em `assets/midia-kit.pdf` e substitua o botão provisório por `<a href="assets/midia-kit.pdf" download>Baixar mídia kit</a>`.

A incorporação do Instagram no protótipo depende das permissões e da disponibilidade do Instagram no navegador. As imagens dos produtos são ilustrativas. Não publicar links afiliados fictícios.

## Ver localmente

Abra `index.html` em um navegador. A navegação para `curadoria.html` usa caminhos relativos e funciona em hospedagem estática ou local.
