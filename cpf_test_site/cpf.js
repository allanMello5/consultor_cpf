function validarCPF() {
    const cpf = document.getElementById("cpf").value.replace(/[^\d]+/g, ''); // Remove qualquer não-número
    const mensagem = document.getElementById("mensagem");

    if (cpf.length !== 11 || !/^\d+$/.test(cpf)) {
        mensagem.textContent = "CPF inválido! O CPF deve conter 11 números.";
        mensagem.style.color = "red";
        return;
    }

    if (isCPFValido(cpf)) {
        mensagem.textContent = "CPF válido!";
        mensagem.style.color = "green";
    } else {
        mensagem.textContent = "CPF inválido!";
        mensagem.style.color = "red";
    }
}

function isCPFValido(cpf) {
    let soma = 0;
    let resto;

    if (cpf === "00000000000" || cpf === "11111111111" || cpf === "22222222222" || cpf === "33333333333" ||
        cpf === "44444444444" || cpf === "55555555555" || cpf === "66666666666" || cpf === "77777777777" ||
        cpf === "88888888888" || cpf === "99999999999") {
        return false;
    }

    for (let i = 1; i <= 9; i++) {
        soma += parseInt(cpf.charAt(i - 1)) * (11 - i);
    }

    resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) {
        resto = 0;
    }

    if (resto !== parseInt(cpf.charAt(9))) {
        return false;
    }

    soma = 0;

    for (let i = 1; i <= 10; i++) {
        soma += parseInt(cpf.charAt(i - 1)) * (12 - i);
    }

    resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) {
        resto = 0;
    }

    if (resto !== parseInt(cpf.charAt(10))) {
        return false;
    }

    return true;
}