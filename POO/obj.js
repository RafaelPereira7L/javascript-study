const pessoa = {
    nome: 'Rafael',
    idade: 18,
    endereco: {
        rua: 'Rua Idolino',
        numero: '1337'
    }
}

const { endereco: {rua:r = '', numero} } = pessoa;
console.log(r, numero);
