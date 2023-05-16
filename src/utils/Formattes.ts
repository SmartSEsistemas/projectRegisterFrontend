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
