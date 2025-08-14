import { useMemo } from 'react';

/**
 * Hook para formatar uma data para o formato HH:mm.
 *
 * @param dateValue A data a ser formatada. Pode ser um objeto Date ou um timestamp.
 * @returns A data formatada como string ou uma string vazia se a data for inválida.
 */
export const useFormattedTime = (dateValue: Date | number | string | undefined | null): string => {
  const formattedTime = useMemo(() => {
    if (!dateValue) {
      return '';
    }
    
    // O construtor de Date() pode lidar com strings de data válidas
    const date = new Date(dateValue);
    
    if (isNaN(date.getTime())) {
      return '';
    }

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${hours}:${minutes}`;
  }, [dateValue]);

  return formattedTime;
};