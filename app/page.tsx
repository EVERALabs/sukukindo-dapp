import HomeStat from "./_components/home/HomeStat"
import HomeYield from "./_components/home/HomeYield"

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gray-950 text-white p-4 sm:p-6">
            <div className="max-w-5xl mx-auto mt-24 space-y-6 sm:space-y-8">
                <HomeStat />
                <HomeYield />
            </div>
        </div>
    )
}