import ehUmCPF from "./valida-cpf";
const camposDoFormulario = document.querySelectorAll("[required]");

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
})

function verificaCampo(campo) {
    if(campo.value == "cpf" && campo.value.lenght >= 11){
        ehUmCPF(campo);
    }
}