import { SecondaryButton } from "../ui/Button"

export default function HomeYield() {
    const yieldOpportunities = [
        {
            lockPeriod: "1 Month",
            endDate: "1 Sep 25",
            minDeposit: "$100",
            poolSize: "$300M",
            apy: "4.5%",
            tvl: "$900M",
        },
        {
            lockPeriod: "3 Month",
            endDate: "1 Nov 25",
            minDeposit: "$100",
            poolSize: "$300M",
            apy: "9.3%",
            tvl: "$600M",
        },
        {
            lockPeriod: "6 Month",
            endDate: "1 Feb 26",
            minDeposit: "$100",
            poolSize: "$200M",
            apy: "19%",
            tvl: "$300M",
        },
        {
            lockPeriod: "12 Month",
            endDate: "1 Aug 26",
            minDeposit: "$100",
            poolSize: "$100M",
            apy: "43%",
            tvl: "$80M",
        },
    ]

    return (
        <div className="space-y-4 sm:space-y-6">
            <h2 className="text-lg sm:text-xl font-semibold text-white">Yield Opportunities</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {yieldOpportunities.map((opportunity, index) => (
                    <div key={index} className="bg-[#0E1016] border border-[#1E2129] rounded-xl">
                        <div className="p-4 sm:p-6 space-y-4">
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">Lock-up Period</span>
                                </div>
                                <div className="text-white font-medium">{opportunity.lockPeriod}</div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">Min. Deposit</span>
                                </div>
                                <div className="text-white font-medium">{opportunity.minDeposit}</div>
                            </div>

                            <div className="space-y-2">
                                <div className="text-gray-400 text-sm">APY</div>
                                <div className="text-xl sm:text-2xl font-bold text-green-400">{opportunity.apy}</div>
                            </div>
                            <SecondaryButton className="w-full bg-gradient-to-r from-[#1B3941] to-[#939B7D] text-white text-sm font-semibold">
                                Start Earning Now
                            </SecondaryButton>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}