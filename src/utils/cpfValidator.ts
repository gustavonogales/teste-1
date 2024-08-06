export function cpfValidator(cpf: string): boolean {
  cpf = cpf.replace(/[^\d]/g, '');

  if (cpf.length !== 11) return false;
  if (/^(\d)\1{10}$/.test(cpf)) return false;

  const verifyingDigits = (base: string) => {
    let soma = 0;
    for (let i = 0; i < base.length; i++) {
      soma += Number(base[i]) * (base.length + 1 - i);
    }
    const resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
  };

  // Calcula os dois dígitos verificadores
  const base = cpf.slice(0, 9);
  const digito1 = verifyingDigits(base);
  const digito2 = verifyingDigits(base + digito1);

  // Verifica se os dígitos verificadores são iguais aos do CPF
  return cpf === base + digito1 + digito2;
}

