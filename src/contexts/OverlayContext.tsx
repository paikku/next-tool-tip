import { createContext, useContext, useState, ReactNode } from 'react';

interface Ctx {
    openId: string | null;
    setOpenId: (id: string | null) => void;
}
const OverlayContext = createContext<Ctx | null>(null);

export const useOverlay = () => {
    const ctx = useContext(OverlayContext);
    if (!ctx) throw new Error('useOverlay must be used inside <OverlayProvider>');
    return ctx;
};

export function OverlayProvider({ children }: { children: ReactNode }) {
    const [openId, setOpenId] = useState<string | null>(null);
    return (
        <OverlayContext.Provider value={{ openId, setOpenId }}>
            {children}
        </OverlayContext.Provider>
    );
}
