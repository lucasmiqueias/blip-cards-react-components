import { useMemo } from 'react';
import { BlipDocument } from "../types";

interface PreviewDocument {
  content: string;
  previewContent: string;
  hasPreview: boolean;
}

/**
 * Hook para gerar uma pré-visualização do conteúdo de um documento com base em regras de canal.
 * @param document O documento ou a string a ser pré-visualizada.
 * @param channel O canal para o qual o documento está sendo exibido.
 * @returns Um objeto contendo o conteúdo original, a pré-visualização e um flag indicando se a pré-visualização está ativa.
 */
export const usePreviewDocument = (
  document: string | BlipDocument | undefined | null,
  channel: string | undefined | null
): PreviewDocument => {
  return useMemo(() => {
    const content =
      typeof document === "string" ? document : document?.content || "";
    
    // Limites de caracteres para a lógica de corte
    const defaultShowMoreLimit = 200;
    const whatsAppShowMoreLimit = 846;
    const whatsAppCutLimit = 768;

    let hasPreview: boolean;
    let previewContent: string;

    if (channel?.toLowerCase() === "whatsapp") {
      hasPreview = content.length > whatsAppShowMoreLimit;
      previewContent = hasPreview ? content.substring(0, whatsAppCutLimit) + "..." : content;
    } else {
      hasPreview = content.length > defaultShowMoreLimit;
      previewContent = hasPreview ? content.substring(0, defaultShowMoreLimit) + "..." : content;
    }

    return {
      content,
      previewContent,
      hasPreview,
    };
  }, [document, channel]);
};