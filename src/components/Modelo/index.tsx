import React from "react";
import clsx from "clsx";
import "./style.css";

export interface ModeloProps {
  /**
   * Texto principal do componente
   */
  text: string;
  /**
   * Variante visual do componente
   */
  variant?: "primary" | "secondary" | "tertiary";
  /**
   * Tamanho do componente
   */
  size?: "small" | "medium" | "large";
  /**
   * Se o componente está desabilitado
   */
  disabled?: boolean;
  /**
   * Se o componente está carregando
   */
  loading?: boolean;
  /**
   * Classe CSS adicional
   */
  className?: string;
  /**
   * Função chamada quando o componente é clicado
   */
  onClick?: () => void;
  /**
   * Elementos filhos do componente
   */
  children?: React.ReactNode;
}

/**
 * Componente Modelo - Use como base para criar novos componentes
 *
 * @example
 * ```tsx
 * <Modelo
 *   text="Exemplo"
 *   variant="primary"
 *   size="medium"
 *   onClick={() => console.log('Clicado')}
 * />
 * ```
 */
const Modelo: React.FC<ModeloProps> = ({
  text,
  variant = "primary",
  size = "medium",
  disabled = false,
  loading = false,
  className,
  onClick,
  children,
}) => {
  const handleClick = () => {
    if (!disabled && !loading && onClick) {
      onClick();
    }
  };

  const componentClasses = clsx(
    "modelo",
    `modelo--${variant}`,
    `modelo--${size}`,
    {
      "modelo--disabled": disabled,
      "modelo--loading": loading,
    },
    className
  );

  return (
    <div
      className={componentClasses}
      onClick={handleClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick && !disabled ? 0 : undefined}
      aria-disabled={disabled}
      aria-busy={loading}
    >
      {loading && (
        <div className="modelo__loading">
          <span className="modelo__spinner" />
        </div>
      )}

      <div className="modelo__content">
        <span className="modelo__text">{text}</span>
        {children && <div className="modelo__children">{children}</div>}
      </div>
    </div>
  );
};

export default Modelo;
