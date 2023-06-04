import { cpf as validateCPF, cnpj as validateCNPJ } from 'cpf-cnpj-validator';




export const isCPForCNPJ = (value: string): boolean => {
  return validateCPF.isValid(value) || validateCNPJ.isValid(value);
};


export const isNotFutureDate = (dateString: string): boolean => {
  const regexDate = /^\d{4}-\d{2}-\d{2}$/;
  if (!regexDate.test(dateString)) {
    return false;
  }

  const date = new Date(dateString);
  const now = new Date();

  // Remova a parte de tempo de "now" para garantir que somente a data seja comparada
  now.setHours(0, 0, 0, 0);

  return date <= now;
}

// Função para validar se uma string está no formato de data ISO "YYYY-MM-DD" e é pelo menos 10 anos atrás
export const isAtLeastTenYearsAgo = (dateString: string): boolean => {
  const regexDate = /^\d{4}-\d{2}-\d{2}$/;
  if (!regexDate.test(dateString)) {
    return false;
  }

  const date = new Date(dateString);
  const tenYearsAgo = new Date();

  // Configure "tenYearsAgo" para a data atual menos 10 anos
  tenYearsAgo.setFullYear(tenYearsAgo.getFullYear() - 10);

  // Remova a parte de tempo de "tenYearsAgo" para garantir que somente a data seja comparada
  tenYearsAgo.setHours(0, 0, 0, 0);

  return date <= tenYearsAgo;
}