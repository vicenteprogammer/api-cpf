async function validation(cpf) {
    let divCpf = cpf.split('');
    let rest = divCpf.splice(9, 2);
    let verify = false

    let oneVerifyDigit = 0;
    let twoVerifyDigit = 0;
    let soma = 0;
    let product = 0;
    let count = 10
    for (let i = 0; i < divCpf.length; i++) {
        product = count * divCpf[i]
        soma += product
        product = 0
        if (count === 2) {
            break
        } else {
            count--
        }
    }
    //Faz a verificação do primeiro dígito
    if (soma % 11 === 0 || soma % 11 === 1) {
        oneVerifyDigit = 0;
    } else {
        oneVerifyDigit = 11 - soma % 11
    }

    //Faz a verificação se o primeiro digito é igual a o primeiro digito verificador do cpf digitado

    if (oneVerifyDigit === Number(rest[0])) {
        //Se o primeiro digito for verdadeiro ele irá para o segundo digito, se não ele já retorna que o cpf é inválido.
        divCpf.push(String(oneVerifyDigit));
        count = 11
        soma = 0
        for (let i = 0; i < divCpf.length; i++) {
            product = count * divCpf[i];
            soma += product
            product = 0

            if (count === 2) {
                break
            } else {
                count--
            }
        }

        if (soma % 11 === 0 || soma % 11 === 1) {
            twoVerifyDigit = 0
        } else {
            twoVerifyDigit = 11 - soma % 11
        }

        if (twoVerifyDigit === Number(rest[1])) {
            verify = true
        } else {
            verify = false
        }
    } else {
        verify = false
    }

    return verify
}

export default validation


