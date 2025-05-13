// src/components/ItemTable.tsx
'use client';

import InteractivePopover   from '@/components/InteractiveTooltip';
import HoverCardPopover     from '@/components/HoverCardPopover';
import HoverScrollPopover   from '@/components/HoverScrollPopover';

interface Item {
    id: string;
    name: string;
    desc: string;
}

const items: Item[] = Array.from({ length: 5 }, (_, i) => ({
    id  : `${i + 1}`,
    name: `Item ${i + 1}`,
    desc: `Description for item ${i + 1}.`,
}));

export default function ItemTable() {
    return (
        <div className="overflow-auto">
            <table className="w-full border text-sm">
                <thead className="bg-gray-100">
                <tr>
                    <th className="px-3 py-2 border">Name</th>
                    <th className="px-3 py-2 border">Actions</th>
                    <th className="px-3 py-2 border">Info</th>
                    <th className="px-3 py-2 border">Docs</th>
                </tr>
                </thead>

                <tbody>
                {items.map((row) => (
                    <tr key={row.id} className="even:bg-gray-50">
                        {/* ───────────────────────── Name (클릭 팝오버) */}
                        <td className="px-3 py-2 border">
                            <InteractivePopover
                                id={`name-${row.id}`}
                                trigger={
                                    <span className="cursor-pointer text-blue-600">
                      {row.name}
                    </span>
                                }
                            >
                                <h4 className="font-semibold mb-1">{row.name}</h4>
                                <p className="text-xs mb-2">{row.desc}</p>
                                <button
                                    onClick={() => alert(`Edit ${row.id}`)}
                                    className="px-2 py-1 rounded bg-blue-600 text-white text-xs"
                                >
                                    Edit
                                </button>
                            </InteractivePopover>
                        </td>

                        {/* ───────────────────────── Actions (클릭, 위쪽) */}
                        <td className="px-3 py-2 border text-center">
                            <InteractivePopover
                                id={`act-${row.id}`}
                                side="top"
                                align="start"
                                trigger={
                                    <button className="px-2 py-1 rounded bg-green-600 text-white text-xs">
                                        Manage
                                    </button>
                                }
                            >
                                <div className="flex flex-col gap-2">
                                    <button
                                        className="px-2 py-1 rounded bg-yellow-500 text-white text-xs"
                                        onClick={() => alert(`Clone ${row.id}`)}
                                    >
                                        Clone
                                    </button>
                                    <button
                                        className="px-2 py-1 rounded bg-red-600 text-white text-xs"
                                        onClick={() => alert(`Delete ${row.id}`)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </InteractivePopover>
                        </td>

                        {/* ───────────────────────── Info (호버 카드) */}
                        <td className="px-3 py-2 border text-center">
                            <HoverCardPopover
                                id={`info-${row.id}`}
                                side="bottom"
                                align="center"
                                trigger={
                                    <span className="underline decoration-dotted cursor-help">
                      ℹ️
                    </span>
                                }
                            >
                                <p>{row.desc}</p>
                            </HoverCardPopover>
                        </td>

                        {/* ───────────────────────── Docs (호버 + 스크롤 + 버튼) */}
                        <td className="px-3 py-2 border text-center">
                            <HoverScrollPopover
                                id={`docs-${row.id}`}
                                side="left"
                                align="center"
                                trigger={
                                    <span className="cursor-help text-purple-600 underline decoration-dotted">
                      Docs
                    </span>
                                }
                            >
                                {/* 긴 내용을 만들어 스크롤 테스트 */}
                                <p className="mb-2">
                                    {Array(10)
                                        .fill(`Extended documentation for ${row.name}. `)
                                        .join('')}
                                </p>
                                <p className="mb-2">
                                    You can review the full SOP and operational notes here before confirming.
                                </p>
                            </HoverScrollPopover>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
