# Vase & Vow — site independente

Página estática em HTML, CSS e JavaScript. Nenhum login ou serviço do ChatGPT é necessário. O PDF completo do produto não está nesta pasta; somente a amostra de 3 páginas e prévias.

## Publicar pelo GitHub + Cloudflare Pages

1. Crie no GitHub um repositório chamado vase-vow-site, preferencialmente privado.
2. Extraia este ZIP. Envie o conteúdo de vase-vow para a raiz do repositório. Preserve a pasta dist. Não envie o ZIP como se fosse o site.
3. No Cloudflare, abra Workers & Pages, Create application, Pages e Connect to Git. Vincule apenas o repositório deste site.
4. Configure: branch main; framework None; comando de build vazio; diretório de saída dist; diretório raiz padrão.
5. Salve e publique. Abra o endereço pages.dev informado pelo painel.
6. No projeto, abra Custom domains e Set up a domain. Informe seu domínio e siga as instruções de DNS. Para usar o domínio raiz, configure a zona e os nameservers da Cloudflare; para subdomínio, é possível usar CNAME no provedor atual. Preserve registros de e-mail existentes.
7. Teste endereço, imagens, amostra, diálogos e FAQ no celular e no computador.

## Conteúdo do projeto

- dist/index.html: textos e estrutura.
- dist/style.css e dist/responsive.css: estilos, animações e ajustes de proporção/mobile.
- dist/app.js: interações e navegação para o resumo do pedido.
- dist/purchase.html, dist/purchase.css e dist/purchase.js: resumo do pedido e acesso ao pagamento.
- dist/theme.css e dist/theme.js: modo claro/escuro persistente com transição suave e suporte a movimento reduzido.
- dist/config.js: configuração pública da oferta.
- dist/assets/: fotos ilustrativas, logos, fontes, páginas e amostra PDF.

## Checkout

Os seis botões da página principal abrem o resumo do pedido em purchase.html. Os botões desse resumo abrem o checkout do produto uexads no Gumroad em uma nova aba. O preço-base é US$29, com pagamento único e garantia de 7 dias. A cobrança e o acesso ao PDF são gerenciados pelo Gumroad. O total com impostos é exibido no checkout.

config.js é público: não coloque senhas, tokens ou chaves secretas nele.

## Testar localmente

Com Python instalado, na pasta do projeto:

    python -m http.server 8000 --directory dist

Abra http://localhost:8000. Não há etapa de instalação ou build.

## Atualizações

Altere os arquivos no GitHub e salve um commit na branch main. A integração do Cloudflare republica automaticamente. Os arquivos podem ser levados para outra hospedagem estática no futuro.

## Estado de lançamento

Versão revisada no GPT Sites: imagens na proporção original, fontes e botões ajustados para celular, animações com suporte a movimento reduzido, calculadora de quantidades e prévias ampliáveis. Revisão em larguras de 320, 390 e 768 pixels e desktop, sem rolagem horizontal. A abertura do checkout foi verificada; compra, recibo e download precisam ser conferidos com a compra de teste do vendedor antes dos anúncios. Rastreamento de anúncios ainda não está configurado.

## Referências

https://developers.cloudflare.com/pages/get-started/git-integration/
https://developers.cloudflare.com/pages/configuration/custom-domains/
https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository
