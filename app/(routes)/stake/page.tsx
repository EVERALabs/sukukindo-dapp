"use client"

import { PrimaryButton } from "@/app/_components/ui/Button"
import { useState } from "react"

export default function StakePage() {
    const [selectedPeriod, setSelectedPeriod] = useState("1 Month")
    const [amount, setAmount] = useState("1000")

    const lockPeriods = [
        {
            period: "1 Month",
            date: "1 Sep 25",
            apy: "4.5%",
        },
        {
            period: "3 Month",
            date: "1 Nov 25",
            apy: "9.3%",
        },
        {
            period: "6 Month",
            date: "1 Feb 26",
            apy: "19%",
        },
        {
            period: "12 Month",
            date: "1 Aug 26",
            apy: "43%",
        },
    ]

    const calculateYield = () => {
        const principal = Number.parseFloat(amount) || 0
        const selectedData = lockPeriods.find((p) => p.period === selectedPeriod)
        const apyRate = Number.parseFloat(selectedData?.apy.replace("%", "") || "0") / 100

        const weeklyEarning = (principal * apyRate) / 52
        const monthlyEarning = (principal * apyRate) / 12
        const totalReceived = principal + monthlyEarning

        return {
            weekly: weeklyEarning.toFixed(4),
            monthly: monthlyEarning.toFixed(2),
            total: totalReceived.toFixed(2),
        }
    }

    const yields = calculateYield()

    return (
        <div className="min-h-screen bg-gray-950 text-white p-4 sm:p-6">
            <div className="max-w-2xl mx-auto space-y-4 sm:space-y-6 mt-16 bg-[#0E1016] p-6 rounded-xl">
                <h1 className="text-xl sm:text-2xl font-bold text-white mb-4">Lock</h1>

                {/* Token Input */}
                <div>
                    <div className="p-4 sm:p-6 bg-[#181A20] border border-[#363A3F] rounded-xl">
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-2">
                                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                    <span className="text-xs font-bold text-white">$</span>
                                </div>
                                <span className="text-white font-medium">USDT</span>
                            </div>
                            <div className="text-right">
                                <input
                                    type="text"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    className="text-white text-xl font-semibold text-right"
                                    placeholder="1000"
                                />
                            </div>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-400">Balance: 100,000 MAX</span>
                            <div className="text-sm text-gray-400">${amount}</div>
                        </div>
                    </div>
                    <div className="text-xs text-gray-500 mt-2">Minimum deposit: 100 USDT</div>
                </div>

                {/* Lock Period Selection */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                    {lockPeriods.map((period) => (
                        <div
                            key={period.period}
                            className={`cursor-pointer transition-colors rounded-lg border border-[#363A3F] ${selectedPeriod === period.period
                                ? "bg-[#181A20]"
                                : "bg-[#0E1016]"
                                }`}
                            onClick={() => setSelectedPeriod(period.period)}
                        >
                            <div className="p-3 sm:p-4 text-left">
                                <div className="text-sm sm:text-base text-white font-medium mb-1">{period.period}</div>
                                <div className="text-xs text-gray-400 mb-2">{period.date}</div>
                                <div className="text-base sm:text-lg font-bold text-green-400">{period.apy}</div>
                                <div className="text-xs text-gray-500">APY</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Estimated Yield */}
                <div className="px-6 py-4 bg-[#181A20] border border-[#363A3F] rounded-xl">
                    <div>
                        <div className="text-sm text-white font-semibold">Estimated Yield Earned</div>
                    </div>
                    <div className="space-y-4 mt-4">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="text-center sm:text-left">
                                <div className="text-sm text-gray-400 mb-1">Weekly Earning</div>
                                <div className="text-sm text-white font-medium">${yields.weekly}</div>
                            </div>
                            <div className="text-center sm:text-left">
                                <div className="text-sm text-gray-400 mb-1">After 1 Month</div>
                                <div className="text-white font-medium">${yields.monthly}</div>
                            </div>
                            <div className="text-center sm:text-left">
                                <div className="text-sm text-gray-400 mb-1">Total Received</div>
                                <div className="text-white font-medium">${yields.total}</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Lock Button */}
                <PrimaryButton className="w-full bg-[#939B7D] text-white !py-4 text-sm rounded-sm font-medium">
                    Lock Deposit
                </PrimaryButton>

                {/* Disclaimer */}
                <div className="flex items-start space-x-2 text-xs text-gray-500">
                    <div className="w-4 h-4 bg-gray-600 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-white text-xs">!</span>
                    </div>
                    <p>
                        Disclaimer: Staking involves risk. Past performance is not indicative of future results. The principal
                        amount and returns are not guaranteed. Please read the terms and conditions before staking.
                    </p>
                </div>
            </div>
        </div>
    )
}
