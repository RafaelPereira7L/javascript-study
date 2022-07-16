function random(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperar(msg, tempo) {

    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject('Bad value');
            return;
        }
        setTimeout(() => {
            resolve(msg + ' - Passed');
            return;
        }, tempo);
    });
}



    const promises = [

        esperar('Promise 1', random(1, 5)),
        esperar('Promise 2', random(1, 5)),
        esperar('Promise 3', random(1, 5)),
        // esperar(1000, 1000),

    ];

    Promise.race(promises)
    .then(function(valor){
        console.log(valor);
    })
    .catch(e => {
        console.log('Erro:', e)});

    
function baixaPagina() {
    const emCache = true;

    if(emCache) {
        return Promise.reject('Pagina em cache');
    }
    else {
        return esperar('Baixei a página', 3000);
    }
}

baixaPagina() 
    .then(dadosPagina => {
        console.log(dadosPagina)
    })
    .catch(e => console.log('Erro:', e));
