export default function HomeStat() {
    const stats = [
        {
            title: "TVL",
            value: "$900,000,000",
            chart: true,
        },
        {
            title: "24h Volume",
            value: "$80,000,000",
            chart: true,
        },
        {
            title: "24h Yield Earned",
            value: "$9,000,000",
            chart: true,
        },
        {
            title: "24h Yield Earned",
            value: "$9,000,000",
            chart: true,
        },
    ]

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6" >
            {
                stats.map((stat, index) => (
                    <div key={index} className="bg-[#0E1016] py-4 px-6 rounded-xl">
                        <div className="pb-2">
                            <div className="text-sm font-normal text-gray-400">{stat.title}</div>
                        </div>
                        <div className="space-y-4">
                            <div className="text-xl sm:text-2xl font-bold text-white">{stat.value}</div>
                            {stat.chart && (
                                <div className="h-12 sm:h-16 flex items-end space-x-1">
                                    {Array.from({ length: 30 }).map((_, i) => (
                                        <div
                                            key={i}
                                            className="bg-[#939B7D] flex-1 rounded-xs"
                                            style={{
                                                height: `${Math.random() * 100}%`,
                                                minHeight: "4px",
                                            }}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))
            }
        </div >
    )
}