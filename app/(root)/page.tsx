"use client";

import TradingViewWidget from "@/components/TradingViewWidget";
import {
    HEATMAP_WIDGET_CONFIG,
    MARKET_DATA_WIDGET_CONFIG,
    TOP_STORIES_WIDGET_CONFIG,
} from "@/lib/constants";

const Home = () => {
    return (
        <div className="min-h-screen bg-black text-white flex justify-center items-start p-10">
            {/* Main Dashboard Container */}
            <div className="w-full max-w-[1600px] grid grid-cols-1 lg:grid-cols-2 gap-8 auto-rows-[600px]">

                {/* === Row 1 === */}
                {/* Market Overview */}
                <div className="bg-neutral-900 rounded-2xl p-4 shadow-lg flex items-center justify-center overflow-hidden">
                    <div className="widget-container w-full h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 rounded-lg">
                        <TradingViewWidget
                            title="Market Overview"
                            scriptUrl="https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js"
                            config={MARKET_DATA_WIDGET_CONFIG}
                            className="w-full h-full rounded-lg"
                        />
                    </div>
                </div>

                {/* Stock Heatmap */}
                <div className="bg-neutral-900 rounded-2xl p-4 shadow-lg flex items-center justify-center overflow-hidden">
                    <div className="widget-container w-full h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 rounded-lg">
                        <TradingViewWidget
                            title="Stock Heatmap"
                            scriptUrl="https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js"
                            config={HEATMAP_WIDGET_CONFIG}
                            className="w-full h-full rounded-lg"
                        />
                    </div>
                </div>

                {/* === Row 2 === */}
                {/* Top Stories */}
                <div className="bg-neutral-900 rounded-2xl p-4 shadow-lg flex items-center justify-center overflow-hidden">
                    <div className="widget-container w-full h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 rounded-lg">
                        <TradingViewWidget
                            title="Top Stories"
                            scriptUrl="https://s3.tradingview.com/external-embedding/embed-widget-timeline.js"
                            config={TOP_STORIES_WIDGET_CONFIG}
                            className="w-full h-full rounded-lg"
                        />
                    </div>
                </div>

                {/* Market Quotes */}
                <div className="bg-neutral-900 rounded-2xl p-4 shadow-lg flex items-center justify-center overflow-hidden">
                    <div className="widget-container w-full h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 rounded-lg">
                        <TradingViewWidget
                            title="Market Quotes"
                            scriptUrl="https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js"
                            config={MARKET_DATA_WIDGET_CONFIG}
                            className="w-full h-full rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
