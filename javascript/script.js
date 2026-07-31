const formatCurrency = (value) => {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
};

const getInput = (message, fallback = '') => {
  if (typeof prompt === 'function') {
    return prompt(message, fallback);
  }
  return fallback;
};

const showAlert = (message) => {
  if (typeof alert === 'function') {
    alert(message);
  } else {
    console.log(message);
  }
};

function runCartaoDeVisita() {
  const nomeCompleto = getInput('Digite seu nome completo:');
  const cargo = getInput('Digite seu cargo ou função:');
  const empresa = getInput('Digite sua empresa ou escola:');
  const email = getInput('Digite seu e-mail:');

  const nomeFormatado = nomeCompleto.toUpperCase();

  console.log('--- CARTÃO DE VISITA ---');
  console.log(`Nome: ${nomeFormatado}`);
  console.log(`Cargo: ${cargo}`);
  console.log(`Empresa/Escola: ${empresa}`);
  console.log(`E-mail: ${email}`);

  showAlert('Cartão gerado.');
}

function runCalculadoraDesconto() {
  const produto = getInput('Digite o nome do produto:');
  const precoOriginal = parseFloat(getInput('Digite o preço original do produto:'));
  const percentualDesconto = parseFloat(getInput('Digite o percentual de desconto:'));

  const valorDesconto = precoOriginal * (percentualDesconto / 100);
  const precoFinal = precoOriginal - valorDesconto;

  console.log('--- CALCULADORA DE DESCONTO ---');
  console.log(`Produto: ${produto}`);
  console.log(`Desconto: ${formatCurrency(valorDesconto)}`);
  console.log(`Preço final: ${formatCurrency(precoFinal)}`);

  showAlert(
    `Produto: ${produto}\nDesconto: ${formatCurrency(valorDesconto)}\nPreço final: ${formatCurrency(precoFinal)}`
  );
}

function runVerificadorSenha() {
  const senha = getInput('Digite a senha para análise:');
  const tamanho = senha.length;
  const temMaiuscula = /[A-Z]/.test(senha);
  const temMinuscula = /[a-z]/.test(senha);
  const classificacao = temMaiuscula && temMinuscula ? 'Forte' : 'Fraca';

  console.log('--- VERIFICADOR DE FORÇA DE SENHA ---');
  console.log(`Tamanho da senha: ${tamanho} caracteres`);
  console.log(`Possui letra maiúscula: ${temMaiuscula}`);
  console.log(`Possui letra minúscula: ${temMinuscula}`);
  console.log(`Classificação: ${classificacao}`);

  showAlert(`Senha analisada: ${classificacao}`);
}

if (typeof window !== 'undefined') {
  window.onload = () => {
    runCartaoDeVisita();
    runCalculadoraDesconto();
    runVerificadorSenha();
  };
}
