function random(min=0, max=3) {
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

// esperar('Fase 1', random())
//     .then(valor => {
//          console.log(valor);
//          return esperar('Fase 2', random());
//     })
//     .then(fase => {
//         console.log(fase);
//         return esperar('Fase 3', random());
//     })
//     .then(fase => {
//         console.log(fase);
//         return fase;
//     })
//     .catch(e => console.log(e));

async function executa() {
    try {
    const fase1 = await esperar('Fase 1', random());
    console.log(fase1);
    const fase2 = await esperar('Fase 2', random());
    console.log(fase2);
    const fase3 = await esperar('Fase 3', random());
    console.log(fase3);
    } catch (e) {
        console.log(e);
    }
}

executa();