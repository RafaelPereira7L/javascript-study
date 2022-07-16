class validarCpf {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpf', {
            value: cpfEnviado.replace(/\D+/g, ''),
            writable: false,
            enumerable: true,
            configurable: false
        });
}

    sequence() {
        return this.cpf.charAt(0).repeat(11) === this.cpf;
}
    gerarNovoCpf() {
        const cpfSemDigitos = this.cpf.slice(0, -2);
        const digito1 = validarCpf.gerarDigito(cpfSemDigitos);
        const digito2 = validarCpf.gerarDigito(cpfSemDigitos + digito1);
        this.novoCpf = cpfSemDigitos + digito1 + digito2;

}

    static gerarDigito(cpfSemDigitos) {
        let total = 0;
        let reversivo = cpfSemDigitos.length + 1;
        
        for(let stringNumerica of cpfSemDigitos) {
            total += reversivo * Number(stringNumerica);
            reversivo--;
        }
        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';

    }



    validar() {
        if (!this.cpf) return false;  
        if (typeof this.cpf !== 'string') return false;       
        if (this.cpf.length !== 11) return false;
        if (this.sequence()) return false;
        this.gerarNovoCpf();


        return this.novoCpf === this.cpf;
    }
}

let checkcpf = new validarCpf('070.987.720-03');
// checkcpf = new validarCpf('666.666.666-66');

if (checkcpf.validar()) {
    console.log('CPF válido');
} else {
    console.log('CPF inválido');
}