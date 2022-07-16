class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log(`${this.nome} já está ligado`);
            return;
        }
        this.ligado = true;
    }

    desligar() {
        if (!this.ligado) {
            console.log(`${this.nome} já está desligado`);
            return;
        }
        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Monitor extends DispositivoEletronico {
    constructor(nome, modelo, frequencia) {
        super(nome);
        this.modelo = modelo;
        this.frequencia = frequencia;
    }

    ligar() {
        console.log('Você alterou o metodo ligar')
    }
}

const s1 = new Smartphone('iPhone', 'Vermelho', 'XR');
console.log(s1);

const monitor = new Monitor('Monitor Benq', 'Zowie XL2546K', '240hz');
monitor.ligar();