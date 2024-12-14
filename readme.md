# Podcast API

Esta é uma simples API de podcasts desenvolvida em Node.js sem a utilização de frameworks. A API permite listar episódios de podcasts e filtrar episódios específicos.

## Estrutura do Projeto

- `controllers/`: Contém os controladores para manipulação de dados dos podcasts.
  - `podcasts-controller.ts`: Define as funções para listar e filtrar episódios de podcasts.
- `routes/`: Define as rotas utilizadas na API.
  - `routes.ts`: Contém as rotas da API.
- `utils/`: Contém utilitários diversos utilizados no projeto.
  - `http-methods.ts`: Define os métodos HTTP suportados pela API.

## Código Exemplo

```typescript
import * as http from "http";
import { getFilterEpisodies, getListEpisodies } from "./controllers/podcasts-controller";
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";

export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {
    //queryString
    const baseUrl = request.url?.split("?")[0];

    if (request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
        await getListEpisodies(request, response);
    }

    if (request.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
        await getFilterEpisodies(request, response);
    }
};

# Instruções de instalação
Clone o repositório:

git clone https://github.com/seu-usuario/podcast-api.git
Navegue até o diretório do projeto:

cd podcast-api
Instale as dependências:

npm install
Inicie o servidor:

npm run start:dev
Uso
Listar Episódios
Endpoint: api/list

Método HTTP: GET

Descrição: Retorna a lista de todos os episódios de podcasts.

Filtrar Episódios
Endpoint: api/episode?p=nomePodCast

Método HTTP: GET

Descrição: Retorna informações de um episódio específico com base nos parâmetros de consulta fornecidos.

Contribuição
Sinta-se à vontade para contribuir com este projeto. Para isso, siga os passos abaixo:

Faça um fork deste repositório.

Crie uma nova branch para a sua feature ou correção: git checkout -b minha-feature.

Faça os commits das suas alterações: git commit -m 'Minha nova feature'.

Envie para o branch original: git push origin minha-feature.

Crie uma pull request.

Licença
Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para obter mais informações.