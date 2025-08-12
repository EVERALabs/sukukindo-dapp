"use client"

import { useState } from "react"
import { Search, Filter, ChevronRight, ChevronLeft } from "lucide-react"

export default function PortfolioPage() {
    const [activeTab, setActiveTab] = useState("Active")
    const [searchQuery, setSearchQuery] = useState("")

    const stats = [
        {
            title: "Total Staked Amount",
            value: "$1,000,000",
        },
        {
            title: "Total Yield Earned",
            value: "$150,000",
        },
        {
            title: "Average APY",
            value: "+65%",
        },
        {
            title: "Active Position",
            value: "12",
        },
    ]

    const positions = [
        {
            id: "#09876",
            hash: "a0f6...a8f6",
            period: "1 Month",
            dateRange: "1 Jul 25 - 1 Aug 25",
            apy: "4.5%",
            stakedAmount: "$1000",
            yieldEarned: "$11",
            status: "Claimed",
        },
        {
            id: "#09876",
            hash: "0f6...ghb2",
            period: "3 Month",
            dateRange: "1 Jul 25 - 1 Sep 25",
            apy: "9.3%",
            stakedAmount: "$10,000",
            yieldEarned: "$116.25",
            status: "Claimed",
        },
        {
            id: "#09876",
            hash: "2412...14ve",
            period: "12 Month",
            dateRange: "1 Aug 25 - 1 Aug 26",
            apy: "43%",
            stakedAmount: "$100,000",
            yieldEarned: "$2144.49",
            status: "Claimed",
        },
    ]

    return (
        <div className="min-h-screen bg-gray-950 text-white p-4 sm:p-6">
            <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8 mt-24">
                {/* Stats Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-[#0E1016] p-4 rounded-lg">
                            <div className="pb-2">
                                <div className="text-sm font-normal text-gray-400">{stat.title}</div>
                            </div>
                            <div>
                                <div className="text-xl sm:text-2xl font-bold text-white">{stat.value}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* My Position Section */}
                <div className="bg-[#03050A] border border-[#181A20] rounded-lg p-6">
                    <div>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0">
                            <div className="text-lg sm:text-xl font-semibold text-white">My Position</div>
                        </div>

                        {/* Tabs */}
                        <div className="flex space-x-6 mt-4">
                            {["Active", "History"].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`pb-2 border-b-2 transition-colors ${activeTab === tab
                                        ? "border-white text-white"
                                        : "border-transparent text-gray-400 hover:text-gray-300"
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="p-0 mt-4">
                        {/* Desktop Table */}
                        <div className="hidden lg:block">
                            <div className="grid grid-cols-6 gap-4 px-6 py-3 border-b border-gray-800 text-sm text-gray-400">
                                <div>ID / Tx Hash</div>
                                <div>Locked Period</div>
                                <div>APY</div>
                                <div>Staked Amount</div>
                                <div>Yield Earned</div>
                                <div>Status</div>
                            </div>

                            <div className="divide-y divide-gray-800">
                                {positions.map((position, index) => (
                                    <div key={index} className="grid grid-cols-6 gap-4 px-6 py-4 hover:bg-gray-800/50 transition-colors">
                                        <div className="space-y-1">
                                            <div className="text-white font-medium">{position.id}</div>
                                            <div className="text-xs text-gray-400 flex items-center">
                                                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                                {position.hash}
                                            </div>
                                        </div>

                                        <div className="space-y-1">
                                            <div className="text-white font-medium">{position.period}</div>
                                            <div className="text-xs text-gray-400">{position.dateRange}</div>
                                        </div>

                                        <div className="text-white font-medium">{position.apy}</div>

                                        <div className="text-white font-medium">{position.stakedAmount}</div>

                                        <div className="text-white font-medium">{position.yieldEarned}</div>

                                        <div className="flex items-center justify-between">
                                            <div className="bg-green-600 hover:bg-green-700 text-white rounded-full px-2">{position.status}</div>
                                            <ChevronRight className="w-4 h-4 text-gray-400" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Mobile Card Layout */}
                        <div className="lg:hidden divide-y divide-gray-800">
                            {positions.map((position, index) => (
                                <div key={index} className="p-4 space-y-3">
                                    <div className="flex items-center justify-between">
                                        <div className="space-y-1">
                                            <div className="text-white font-medium">{position.id}</div>
                                            <div className="text-xs text-gray-400 flex items-center">
                                                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                                {position.hash}
                                            </div>
                                        </div>
                                        <div className="bg-green-600 hover:bg-green-700 text-white">{position.status}</div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <div className="text-gray-400 mb-1">Period</div>
                                            <div className="text-white font-medium">{position.period}</div>
                                            <div className="text-xs text-gray-400">{position.dateRange}</div>
                                        </div>
                                        <div>
                                            <div className="text-gray-400 mb-1">APY</div>
                                            <div className="text-white font-medium">{position.apy}</div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <div className="text-gray-400 mb-1">Staked Amount</div>
                                            <div className="text-white font-medium">{position.stakedAmount}</div>
                                        </div>
                                        <div>
                                            <div className="text-gray-400 mb-1">Yield Earned</div>
                                            <div className="text-white font-medium">{position.yieldEarned}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-4 border-t border-gray-800 space-y-2 sm:space-y-0">
                            <div className="flex items-center space-x-2 text-sm text-gray-400">
                                <span>Show</span>
                                <select className="bg-gray-800 border-gray-700 text-white px-2 py-1 rounded">
                                    <option>20</option>
                                    <option>50</option>
                                    <option>100</option>
                                </select>
                                <span>per page</span>
                            </div>

                            <div className="flex items-center space-x-2">
                                <button
                                    className="border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent"
                                >
                                    <ChevronLeft className="w-4 h-4" />
                                </button>
                                <span className="text-sm text-gray-400">Page 1 of 1</span>
                                <button
                                    className="border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent"
                                >
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
