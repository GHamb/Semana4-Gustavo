document.getElementById('salvar').addEventListener('click', () => {
    if (document.querySelectorAll(':invalid').length > 0) {
        alert("Alguns campos não foram preenchidos corretamente.")
    }
    verCPF(document.getElementById('CPF'))
    verRG(document.getElementById('RG'))
    verCEP(document.getElementById('Cep'))
})


function Getend() {

    var req = new XMLHttpRequest
    req.open("GET", "https://viacep.com.br/ws/" + document.getElementById('Cep').value + "/json/unicode/", true)
    req.send();

    req.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            var obj = JSON.parse(this.responseText)
            document.getElementById('estado').value = obj.uf
            document.getElementById('bairro').value = obj.bairro
            document.getElementById('cidade').value = obj.localidade
            document.getElementById('rua').value = obj.logradouro
        }
    }
}

document.getElementById('Cep').addEventListener("change", Getend)

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