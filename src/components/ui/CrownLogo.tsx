import React from 'react';

interface CrownLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const CrownLogo: React.FC<CrownLogoProps> = ({ 
  className = '', 
  size = 'md',
}) => {
  const heightClasses = {
    sm: 'h-10 sm:h-12',
    md: 'h-14 sm:h-16',
    lg: 'h-20 sm:h-24',
  };

  return (
    <div className={`flex items-center select-none ${className}`}>
      {/* Logotipo Oficial de la Agencia (LOGO.jpeg procesado a logo.png transparente de alta fidelidad) */}
      <img
        src="/images/logo.png"
        alt="Renta tu limo - Lujo sobre ruedas"
        className={`${heightClasses[size]} w-auto object-contain filter drop-shadow-md`}
        loading="eager"
      />
    </div>
  );
};
