import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("ShopBot AI");

  const tabs = [
    "ShopBot AI",
    "Alarms",
    "Manuals",
    "Parts & Wiring",
    "Program Viewer",
    "MC Data & Setup Sheets",
    "Training",
    "Cincom"
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "ShopBot AI":
        return <div className="p-4">🤖 ShopBot AI Chat Placeholder</div>;
      case "Alarms":
        return <div className="p-4">🚨 Alarm Code Lookup Placeholder</div>;
      case "Manuals":
        return <div className="p-4">📘 Manual Viewer Placeholder</div>;
      case "Parts & Wiring":
        return <div className="p-4">🔌 Parts List + Wiring Diagram Placeholder</div>;
      case "Program Viewer":
        return <div className="p-4">📄 L20E Program Viewer Placeholder</div>;
      case "MC Data & Setup Sheets":
        return <div className="p-4">📋 Setup Sheet Placeholder</div>;
      case "Training":
        return <div className="p-4">🎓 Video Training Placeholder</div>;
      case "Cincom":
        return <div className="p-4">⬇️ Model Dropdown Placeholder (Default: L20E)</div>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">AMS TOOLS</h1>
      <div className="grid grid-cols-4 gap-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={
              activeTab === tab
                ? "p-3 rounded-2xl font-medium transition bg-blue-600 text-white shadow"
                : "p-3 rounded-2xl font-medium transition bg-white text-black border"
            }
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="bg-white rounded-xl shadow p-4 min-h-[300px]">
        {renderTabContent()}
      </div>
    </div>
  );
}
