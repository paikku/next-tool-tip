import * as HoverCard from '@radix-ui/react-hover-card';
import { useOverlay } from '@/contexts/OverlayContext';
import { ReactNode } from 'react';

interface Props {
    id: string;                    // 전역 고유 ID
    trigger: ReactNode;            // 트리거 JSX
    children: ReactNode;           // 팝오버 내부 콘텐츠
    side?: HoverCard.HoverCardContentProps['side'];
    align?: HoverCard.HoverCardContentProps['align'];
}

export default function HoverScrollPopover({
                                               id,
                                               trigger,
                                               children,
                                               side = 'right',
                                               align = 'center',
                                           }: Props) {
    const { openId, setOpenId } = useOverlay();
    const open = openId === id;

    return (
        <HoverCard.Root
            open={open}
            onOpenChange={(v) => setOpenId(v ? id : null)}
            openDelay={100}
            closeDelay={150}
        >
            <HoverCard.Trigger asChild>{trigger}</HoverCard.Trigger>

            <HoverCard.Portal>
                <HoverCard.Content
                    side={side}
                    align={align}
                    sideOffset={12}
                    // 스크롤 가능 영역 + 전·퇴장 애니메이션
                    className="z-50 rounded-lg bg-white text-sm p-4 shadow-xl border w-60
                     data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut"
                >
                    {/* 내부 스크롤 컨테이너 */}
                    <div className="max-h-40 overflow-y-auto pr-2 mb-3">{children}</div>

                    {/* 예시용 버튼 영역 */}
                    <div className="flex gap-2">
                        <button
                            onClick={() => alert('Confirmed!')}
                            className="flex-1 px-2 py-1 rounded bg-blue-600 text-white text-xs"
                        >
                            Confirm
                        </button>
                        <button
                            onClick={() => setOpenId(null)}
                            className="flex-1 px-2 py-1 rounded bg-gray-300 text-gray-800 text-xs"
                        >
                            Close
                        </button>
                    </div>

                    <HoverCard.Arrow className="fill-white" />
                </HoverCard.Content>
            </HoverCard.Portal>
        </HoverCard.Root>
    );
}
