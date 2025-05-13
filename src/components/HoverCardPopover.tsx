import * as HoverCard from '@radix-ui/react-hover-card';
import { useOverlay } from '@/contexts/OverlayContext';
import { ReactNode } from 'react';

interface Props {
    id: string;
    trigger: ReactNode;
    children: ReactNode;
    side?: HoverCard.HoverCardContentProps['side'];
    align?: HoverCard.HoverCardContentProps['align'];
}

export default function HoverCardPopover({
                                             id,
                                             trigger,
                                             children,
                                             side = 'top',
                                             align = 'center',
                                         }: Props) {
    const { openId, setOpenId } = useOverlay();
    const open = openId === id;

    return (
        <HoverCard.Root
            open={open}
            onOpenChange={v => setOpenId(v ? id : null)}
            openDelay={100}
            closeDelay={150}
        >
            <HoverCard.Trigger asChild>{trigger}</HoverCard.Trigger>

            <HoverCard.Portal>
                <HoverCard.Content
                    side={side}
                    align={align}
                    sideOffset={12}
                    className="z-50 rounded-lg bg-gray-800 text-white text-sm p-3 shadow-lg
                     data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut"
                >
                    {children}
                    <HoverCard.Arrow className="fill-gray-800" />
                </HoverCard.Content>
            </HoverCard.Portal>
        </HoverCard.Root>
    );
}
