import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("ShopBot AI");
  const tabs = ["ShopBot AI","Alarms","Manuals","Parts & Wiring","Program Viewer","MC Data & Setup Sheets","Training","Cincom"];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">AMS TOOLS</h1>
      <div className="grid grid-cols-4 gap-4 mb-6">
        {tabs.map(tab => (
          <button
            key={tab}
            className={(activeTab === tab
              ? "bg-blue-600 text-white"
              : "bg-white text-black border") + " p-3 rounded-2xl font-medium shadow"}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="bg-white rounded-xl shadow p-4 min-h-[300px]">
        {/* Content based on activeTab goes here */}
        {activeTab === "ShopBot AI" && <div className="text-gray-600">ShopBot AI Chat Placeholder</div>}
      </div>
    </div>
  );
}
