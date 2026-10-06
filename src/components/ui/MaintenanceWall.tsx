import React, { useEffect } from 'react';
import { Lock, MessageCircle, AlertTriangle } from 'lucide-react';

export const MaintenanceWall: React.FC = () => {
  useEffect(() => {
    // Bloquear scroll e interacción en el body
    const prevOverflow = document.body.style.overflow;
    const prevTouchAction = document.body.style.touchAction;

    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';

    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.style.touchAction = prevTouchAction;
    };
  }, []);

  const whatsappDevUrl = `https://wa.me/525529156160?text=${encodeURIComponent(
    'Hola, me comunico respecto a la formalización y activación del sitio web.'
  )}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Sitio web en mantenimiento"
      className="fixed inset-0 z-[999999] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md select-none overflow-y-auto"
      style={{ touchAction: 'none' }}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="relative max-w-lg w-full bg-[#0B0C10]/95 border border-[#DDB789]/50 rounded-3xl p-6 sm:p-10 shadow-[0_0_80px_rgba(0,0,0,0.95),0_0_35px_rgba(221,183,137,0.2)] text-center pointer-events-auto my-auto animate-in fade-in duration-300">
        {/* Resplandor decorativo */}
        <div
          className="absolute -top-16 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#DDB789]/15 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Ícono de Candado y Alerta */}
        <div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#DDB789]/10 border border-[#DDB789]/30 flex items-center justify-center text-[#DDB789] mb-5 shadow-inner">
          <Lock className="w-8 h-8 sm:w-10 sm:h-10 text-[#DDB789]" strokeWidth={1.8} />
        </div>

        {/* Badge de Estado */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#DDB789]/15 border border-[#DDB789]/30 text-[#DDB789] text-[11px] font-sans font-medium uppercase tracking-widest mb-4">
          <AlertTriangle className="w-3.5 h-3.5" />
          <span>Aviso del Sistema</span>
        </div>

        {/* Mensaje Solicitado Exacto */}
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 mb-6 text-center sm:text-left">
          <p className="font-sans text-xs sm:text-sm text-platinum-light/95 font-medium leading-relaxed">
            Este sitio web se encuentra actualmente en mantenimiento, el acceso general se activará tras la formalización y liquidación del sitio.
          </p>
        </div>

        {/* Sección de Contacto al Área de Desarrollo Web */}
        <div className="pt-2 border-t border-white/10">
          <p className="font-sans text-xs uppercase tracking-wider text-platinum-muted mb-3 font-medium">
            Contacto al área de desarrollo web:
          </p>

          <a
            href={whatsappDevUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 w-full py-4 px-6 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-obsidian-deep font-sans font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_25px_rgba(37,211,102,0.55)] cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
          >
            <MessageCircle className="w-5 h-5 fill-obsidian-deep" />
            <span>WhatsApp (55 2915 6160)</span>
          </a>
        </div>
      </div>
    </div>
  );
};
