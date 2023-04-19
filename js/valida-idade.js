export default function ehMaiorDeIdade(campo) {
    const dataNascimento = new Date(campo.value);
    if (!validaIdade) {
        campo.setCustomValidity('O usuário não possui mais de 16 anos');
    }
}

function validaIdade(data) {
    const dataAtual = new Date();
    const dataMais16 = new Date(data.getUTCFullYear() + 16, data.getUTCMonth(), data.getUTCDate());

    return dataAtual >= dataMais16;
}