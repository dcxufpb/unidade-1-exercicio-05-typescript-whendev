const cupom = require('./cupom');

function verificaCampoObrigatorio(mensagemEsperada: string) {
  try {
    cupom.dados_loja();
  } catch (e) {
    expect(e.message).toBe(mensagemEsperada);
  }
}

test('Loja Completa', () => {
  expect(cupom.dados_loja()).toBe(
    `Arcos Dourados Com. de Alimentos LTDA
Av. Projetada Leste, 500 EUC F32/33/34
Br. Sta Genebra - Campinas - SP
CEP:13080-395 Tel (19) 3756-7408
Loja 1317 (PDP)
CNPJ: 42.591.651/0797-34
IE: 244.898.500.113
`);
});

test('Nome vazio', () => {
  cupom.dados.nome_loja = "";
  verificaCampoObrigatorio(`O campo nome da loja é obrigatório`);
  cupom.dados.nome_loja = "Arcos Dourados Com. de Alimentos LTDA";
});

test('Logradouro vazio', () => {
  cupom.dados.logradouro = "";
  verificaCampoObrigatorio(`O campo logradouro do endereço é obrigatório`);
  cupom.dados.logradouro = "Av. Projetada Leste";
});

test('Número zero', () => {
  cupom.dados.numero = 0;
  expect(cupom.dados_loja()).toBe(
    `Arcos Dourados Com. de Alimentos LTDA
Av. Projetada Leste, s/n EUC F32/33/34
Br. Sta Genebra - Campinas - SP
CEP:13080-395 Tel (19) 3756-7408
Loja 1317 (PDP)
CNPJ: 42.591.651/0797-34
IE: 244.898.500.113
`);
  cupom.dados.numero = 500;
});

test('Município vazio', () => {
  cupom.dados.municipio = "";
  verificaCampoObrigatorio(`O campo município do endereço é obrigatório`);
  cupom.dados.municipio = "Campinas";
});

test('Estado vazio', () => {
  cupom.dados.estado = "";
  verificaCampoObrigatorio(`O campo estado do endereço é obrigatório`);
  cupom.dados.estado = "SP";
});

test('CNPJ vazio', () => {
  cupom.dados.cnpj = "";
  verificaCampoObrigatorio(`O campo CNPJ da loja é obrigatório`);
  cupom.dados.cnpj = "42.591.651/0797-34";
});

test('Inscrição estadual vazia', () => {
  cupom.dados.inscricao_estadual = "";
  verificaCampoObrigatorio(`O campo inscrição estadual da loja é obrigatório`);
  cupom.dados.inscricao_estadual = "244.898.500.113";
});

test('Exercício 2 - customizado', () => {

//   // Defina seus próprios valores para as variáveis a seguir
  cupom.dados.nome_loja = "LOJAS AMERICANAS S.A.";
  cupom.dados.logradouro = "R SACADURA CABRAL";
  cupom.dados.numero = 102;
  cupom.dados.complemento = "";
  cupom.dados.bairro = "GAMBOA";
  cupom.dados.municipio = "RIO DE JANEIRO";
  cupom.dados.estado = "RJ";
  cupom.dados.cep = "20.221-160";
  cupom.dados.telefone = "(21) 2206-6708";
  cupom.dados.observacao = "47.11-3-02 Comercio varejista de mercadorias em geral";
  cupom.dados.cnpj = "33.014.556/0001-96";
  cupom.dados.inscricao_estadual = "85.687.08-5";

  //E atualize o texto esperado abaixo
  expect(cupom.dados_loja()).toBe(
    `LOJAS AMERICANAS S.A.
R SACADURA CABRAL, 102 
GAMBOA - RIO DE JANEIRO - RJ
CEP:20.221-160 Tel (21) 2206-6708
47.11-3-02 Comercio varejista de mercadorias em geral
CNPJ: 33.014.556/0001-96
IE: 85.687.08-5
`);
});
