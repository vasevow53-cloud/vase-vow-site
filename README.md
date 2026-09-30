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
- dist/style.css: estilos responsivos.
- dist/app.js: interações e botão de compra.
- dist/config.js: configuração pública da oferta.
- dist/assets/: fotos ilustrativas, logos, fontes, páginas e amostra PDF.

## Checkout

O botão de pagamento continua inativo. Configure checkoutUrl com um endereço HTTPS do Gumroad, os dados reais do vendedor e as políticas finais. Atualize também os textos de pré-lançamento no HTML antes de definir launchReady como true. Um link de checkout sozinho não conclui esse processo.

config.js é público: não coloque senhas, tokens ou chaves secretas nele. O ID público de um Pixel não é uma chave secreta.

## Testar localmente

Com Python instalado, na pasta do projeto:

    python -m http.server 8000 --directory dist

Abra http://localhost:8000. Não há etapa de instalação ou build.

## Atualizações

Altere os arquivos no GitHub e salve um commit na branch main. A integração do Cloudflare republica automaticamente. Os arquivos podem ser levados para outra hospedagem estática no futuro.

## Estado de lançamento

A transferência conserva a página atual. Checkout, atendimento, políticas finais e rastreamento de anúncios ainda precisam ser configurados. A revisão visual de celular e computador deve ser concluída antes de anúncios.

## Referências

https://developers.cloudflare.com/pages/get-started/git-integration/
https://developers.cloudflare.com/pages/configuration/custom-domains/
https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository
