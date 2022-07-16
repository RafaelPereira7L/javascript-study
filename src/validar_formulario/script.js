class ValidarFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos();
}

    eventos() {
       this.formulario.addEventListener('submit', e => {
           this.handleSubmit(e);
       }); 
    }
    handleSubmit(e) {
        e.preventDefault();
        const validInputs = this.checkInputs();
        const validPasswords = this.validPasswords();

        if(validInputs && validPasswords) {
            alert('Formulário enviado com sucesso!');
            this.formulario.submit();
        }
    }

    validPasswords() {
       let valid = true;

       const senha = this.formulario.querySelector('#senha');
       const repetirSenha = this.formulario.querySelector('#repetirSenha');

       if(senha.value !== repetirSenha.value) {
        this.inputError(senha, 'As senhas não conferem!');
           this.inputError(repetirSenha, 'As senhas não conferem!');
           valid = false;
       }

       if(senha.value.length < 6 || senha.value.length > 12) {
        this.inputError(senha, 'A senha deve ter entre 6 e 12 caracteres!');
           valid = false;
       }
    }

  
    checkInputs() {
        let valid = true; 

        for(let errorText of this.formulario.querySelectorAll('.error-text')) {    
            errorText.remove();
        }


        for(let campo of this.formulario.querySelectorAll('input')) {
            const label = campo.previousElementSibling.innerText;

            if(campo.value === '') {
                valid = false;
                this.inputError(campo, `O campo "${label}" é obrigatório!`);
        }

            if(campo.classList.contains('cpf')) {
                if (!this.validarCpf(campo)) valid = false;
            }

            if(campo.classList.contains('usuario')) {
                if (!this.validarUsuario(campo)) valid = false;
            }
    }
    return valid;
}

    validarUsuario(campo) {
        const usuario = campo.value;
        let valid = true;
        if(usuario.length < 3 || usuario.length > 12) {
            this.inputError(campo, 'O usuário deve ter entre 3 e 12 caracteres!');
            valid= false;
        }

        if(!usuario.match(/^[a-zA-Z0-9]+/g)) {
            this.inputError(campo, 'O usuário deve conter apenas letras e números!');
            valid = false;
        }
        
        return valid;
    }

    validarCpf(campo) {
        const cpf = new validarCpf(campo.value);

        if(!cpf.validar()) {
            this.inputError(campo, 'CPF inválido!');
            return false;
        }
        return true;

}
    inputError(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }

}

const validar = new ValidarFormulario();