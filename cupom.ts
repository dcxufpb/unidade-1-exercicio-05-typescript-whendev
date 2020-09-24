let dados = {
  nome_loja: "Arcos Dourados Com. de Alimentos LTDA",
  logradouro: "Av. Projetada Leste",
  numero: 500,
  complemento: "EUC F32/33/34",
  bairro: "Br. Sta Genebra",
  municipio: "Campinas",
  estado: "SP",
  cep: "13080-395",
  telefone: "(19) 3756-7408",
  observacao: "Loja 1317 (PDP)",
  cnpj: "42.591.651/0797-34",
  inscricao_estadual: "244.898.500.113"
};

function dados_loja() {
  // Implemente aqui
  if (dados.nome_loja == "") {
    throw new Error(`O campo nome da loja é obrigatório`);
  }

  if (dados.logradouro == "") {
    throw new Error(`O campo logradouro do endereço é obrigatório`);
  }

  if (dados.municipio == "") {
    throw new Error(`O campo município do endereço é obrigatório`);
  }

  if (dados.estado == "") {
    throw new Error(`O campo estado do endereço é obrigatório`);
  }

  if (dados.cnpj == "") {
    throw new Error(`O campo CNPJ da loja é obrigatório`);
  }

  if (dados.inscricao_estadual == "") {
    throw new Error(`O campo inscrição estadual da loja é obrigatório`);
  }

  let show = `${dados.nome_loja}
${dados.logradouro}, ${(dados.numero == 0)? "s/n" : dados.numero} ${dados.complemento}
${dados.bairro} - ${dados.municipio} - ${dados.estado}
CEP:${dados.cep} Tel ${dados.telefone}
${dados.observacao}
CNPJ: ${dados.cnpj}
IE: ${dados.inscricao_estadual}
`;
  return show
}

module.exports = {
  dados: dados,
  dados_loja:  dados_loja
};
