document.getElementById('salvar').addEventListener('click', () => {
    if (document.querySelectorAll(':invalid').length > 0) {
        alert("Alguns campos não foram preenchidos corretamente.")
    }
    verCPF(document.getElementById('CPF'))
    verRG(document.getElementById('RG'))
    verCEP(document.getElementById('Cep'))
})
function cpf(element) {
    if (element.value.length == 3 || element.value.length == 7) {
        element.value += '.'
    } else if (element.value.length == 11) {
        element.value += '-'
    }
}
function rg(element) {
    if (element.value.length == 2 || element.value.length == 6) {
        element.value += '.'
    } else if (element.value.length == 10) {
        element.value += '-'
    }
}

function cep(element) {
    if (element.value.length == 5) {
        element.value += '-'

    }
}

function verRG(element) {
    if (element.value.length < 12) {
        alert('numero incorreto de caracteres de RG')

    }
}
function verCPF(element) {
    if (element.value.length < 14) {
        alert('número incorreto de caracteres de CPF')

    }
}
function verCEP(element) {
    if (element.value.length < 9) {
        alert('CEP inválido')

    }
}