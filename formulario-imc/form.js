const form = () => {
    const form= document.querySelector('form');
    const result = document.querySelector('.result');
    const pessoa = [];

    const receberForm = (e) => {
        e.preventDefault();
        const nome = form.querySelector('#nome').value;
        const sobrenome = form.querySelector('#sobrenome').value;
        const peso = form.querySelector('#peso').value;
        const altura = form.querySelector('#altura').value;
        pessoa.push([nome], [sobrenome], [peso], [altura]);
        console.log(pessoa);
        console.log(pessoa.length);

        const imc = () => {
            return (peso/altura**2).toFixed(3);
        }

        result.innerHTML = `<p>Nome: ${nome} ${sobrenome}</p> <p>Peso: ${peso}KG</p> <p>Altura: ${altura} metros</p> <p>IMC: ${imc()}</p>`;
    }

    form.addEventListener('submit', receberForm);
}

form();