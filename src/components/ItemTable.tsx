import InteractivePopover from '@/components/InteractiveTooltip';
import HoverCardPopover from '@/components/HoverCardPopover';

const mock = Array.from({ length: 5 }, (_, i) => ({
    id: `${i + 1}`,
    name: `Item ${i + 1}`,
    desc: `Description for item ${i + 1}.`,
}));

export default function ItemTable() {
    return (
        <div className="overflow-auto">
            <table className="w-full border">
                <thead className="bg-gray-100">
                <tr>
                    <th className="px-3 py-2 border">Name</th>
                    <th className="px-3 py-2 border">Actions</th>
                    <th className="px-3 py-2 border">Info</th>
                </tr>
                </thead>
                <tbody>
                {mock.map((row) => (
                    <tr key={row.id} className="even:bg-gray-50">
                        {/* 예시 1 — 기본 클릭 팝오버 (오른쪽) */}
                        <td className="px-3 py-2 border">
                            <InteractivePopover
                                id={`name-${row.id}`}
                                trigger={<span className="cursor-pointer text-blue-600">{row.name}</span>}
                            >
                                <h4 className="font-semibold mb-1">{row.name}</h4>
                                <p className="text-xs mb-2">{row.desc}</p>
                                <button
                                    className="px-2 py-1 rounded bg-blue-600 text-white text-xs"
                                    onClick={() => alert(`Edit ${row.id}`)}
                                >
                                    Edit
                                </button>
                            </InteractivePopover>
                        </td>

                        {/* 예시 2 — 클릭 팝오버 (위쪽, 왼쪽 정렬) */}
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

                        {/* 예시 3 — 호버 카드 (어두운 테마 + 화살표 아래) */}
                        <td className="px-3 py-2 border text-center">
                            <HoverCardPopover
                                id={`info-${row.id}`}
                                side="bottom"
                                align="center"
                                trigger={<span className="underline decoration-dotted cursor-help">ℹ️</span>}
                            >
                                <p>{row.desc}</p>
                            </HoverCardPopover>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
