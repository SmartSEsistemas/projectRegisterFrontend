export const formatCPFOrCNPJ = (value: string): string => {
  let formattedValue = value.replace(/\D/g, ''); // Remove caracteres não numéricos

  if (formattedValue.length <= 11) {
    // Formatar CPF: XXX.XXX.XXX-XX
    formattedValue = formattedValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  } else {
    // Formatar CNPJ: XX.XXX.XXX/XXXX-XX
    formattedValue = formattedValue.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
  }

  // Verificar e ajustar o comprimento máximo
  const maxLength = 18; // Comprimento máximo permitido (CNPJ com pontuação)
  if (formattedValue.length > maxLength) {
    formattedValue = formattedValue.slice(0, maxLength);
  }

  return formattedValue;
};

// Formatação do CPF
export const formatCPF = (value: string): string => {
  let formattedValue = value.replace(/\D/g, ''); // Remove caracteres não numéricos

  // Formatar CPF: XXX.XXX.XXX-XX
  formattedValue = formattedValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

  // Verificar e ajustar o comprimento máximo
  const maxLength = 14; // Comprimento máximo permitido (CPF com pontuação)
  if (formattedValue.length > maxLength) {
    formattedValue = formattedValue.slice(0, maxLength);
  }

  return formattedValue;
};

// Formatação do CNPJ
export const formatCNPJ = (value: string): string => {
  let formattedValue = value.replace(/\D/g, ''); // Remove caracteres não numéricos

  // Formatar CNPJ: XX.XXX.XXX/XXXX-XX
  formattedValue = formattedValue.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');

  // Verificar e ajustar o comprimento máximo
  const maxLength = 18; // Comprimento máximo permitido (CNPJ com pontuação)
  if (formattedValue.length > maxLength) {
    formattedValue = formattedValue.slice(0, maxLength);
  }

  return formattedValue;
};

export const formatRG = (value: string): string => {
  let formattedValue = value.replace(/\D/g, ''); // Remove caracteres não numéricos

  // Formatar RG: XX.XXX.XXX
  formattedValue = formattedValue.replace(/(\d{2})(\d{3})(\d{2})/, '$1.$2.$3');

  // Verificar e ajustar o comprimento máximo
  const maxLength = 9; // Comprimento máximo permitido (RG com pontuação)
  if (formattedValue.length > maxLength) {
    formattedValue = formattedValue.slice(0, maxLength);
  }

  return formattedValue;
};

export const formatCNH = (value: string): string => {
  let formattedValue = value.replace(/\D/g, ''); // Remove caracteres não numéricos

  // Formatar CNH: 000 000 000 00
  formattedValue = formattedValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1 $2 $3 $4');

  // Verificar e ajustar o comprimento máximo
  const maxLength = 14; // Comprimento máximo permitido (CNH com pontuação)
  if (formattedValue.length > maxLength) {
    formattedValue = formattedValue.slice(0, maxLength);
  }

  return formattedValue;
};

export const formatCEP = (value: string): string => {
  let formattedValue = value.replace(/\D/g, ''); // Remove caracteres não numéricos

  // Formatar CEP: 00000-000
  formattedValue = formattedValue.replace(/(\d{5})(\d{3})/, '$1-$2');

  // Verificar e ajustar o comprimento máximo
  const maxLength = 9; // Comprimento máximo permitido (CEP com pontuação)
  if (formattedValue.length > maxLength) {
    formattedValue = formattedValue.slice(0, maxLength);
  }

  return formattedValue;
};

export const formatCellPhone = (value: string): string => {
  let formattedValue = value.replace(/\D/g, ''); // Remove caracteres não numéricos

  // Formatar telefone: (DD) 00000-0000
  formattedValue = formattedValue.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');

  // Verificar e ajustar o comprimento máximo
  const maxLength = 15; // Comprimento máximo permitido (Telefone com pontuação)
  if (formattedValue.length > maxLength) {
    formattedValue = formattedValue.slice(0, maxLength);
  }

  return formattedValue;
};


