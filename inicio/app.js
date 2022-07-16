const dados = {
    nome: "Rafael Henrique",
    sobrenome: "Pereira",
    anoNascimento: "2003"
}
const peso=65;
const altura=1.74;
const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();
let idade= anoAtual-dados.anoNascimento;
let imc= peso/altura**2;

const alerta = () => {
alert(dados.nome+" "+dados.sobrenome+" tem "+idade+" anos, nasceu em "+dados.anoNascimento+" e pesa "+peso+"kg. Ele tem o IMC de: "+imc);
}

const prompt = () => {
    let num1 = window.prompt("Digite um numero: ");
    let num2 = window.prompt("Digite outro numero: ");
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    let soma = num1+num2;
    alert(soma); 
    console.log(typeof soma);
}
