import * as Popover from '@radix-ui/react-popover';
import { useOverlay } from '@/contexts/OverlayContext';
import { ReactNode } from 'react';

interface Props {
    id: string;
    trigger: ReactNode;
    children: ReactNode;
    side?: Popover.PopoverContentProps['side']; // top·right·bottom·left
    align?: Popover.PopoverContentProps['align']; // start·center·end
}

export default function InteractivePopover({
                                               id,
                                               trigger,
                                               children,
                                               side = 'right',
                                               align = 'center',
                                           }: Props) {
    const { openId, setOpenId } = useOverlay();
    const open = openId === id;

    return (
        <Popover.Root open={open} onOpenChange={v => setOpenId(v ? id : null)}>
            <Popover.Trigger asChild>{trigger}</Popover.Trigger>

            <Popover.Portal>
                <Popover.Content
                    side={side}
                    align={align}
                    sideOffset={8}
                    className="z-50 rounded-xl bg-white border shadow-lg p-4 w-56
                     data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut"
                >
                    {children}
                    <Popover.Arrow className="fill-white" />
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    );
}
