import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import GlassSurface from './GlassSurface';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative z-10 max-w-2xl w-full max-h-[80vh] overflow-y-auto rounded-3xl animate-in fade-in zoom-in duration-300">
        <GlassSurface
            width="100%"
            height="100%"
            borderRadius={24}
            backgroundOpacity={0.1}
            blur={20}
            className="border border-white/10"
        >
            <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-white">{title}</h3>
                    <button 
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-white/10 transition-colors text-slate-400 hover:text-white"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>
                <div className="text-slate-300 leading-relaxed space-y-4">
                    {children}
                </div>
            </div>
        </GlassSurface>
      </div>
    </div>
  );
}
