import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("ShopBot AI");
  const [shopbotInput, setShopbotInput] = useState("");
  const [shopbotResponse, setShopbotResponse] = useState("");

  const handleShopbotSubmit = () => {
    setShopbotResponse("Interpreting macro logic for input: " + shopbotInput);
  };

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
        return (
          <div className="p-4 space-y-2">
            <input
              type="text"
              value={shopbotInput}
              onChange={(e) => setShopbotInput(e.target.value)}
              placeholder="Ask ShopBot about macros, offsets, etc."
              className="w-full p-2 border rounded"
            />
            <button
              onClick={handleShopbotSubmit}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
            <div className="border p-2 rounded bg-gray-50">{shopbotResponse}</div>
          </div>
        );
      case "Alarms":
        return (
          <div className="p-4">
            <input className="p-2 border w-full mb-2 rounded" placeholder="Search alarms..." />
            <ul className="list-disc ml-5 text-sm">
              <li>E100 - Main spindle overload</li>
              <li>E205 - Axis drive alarm</li>
              <li>E310 - Tool position overrun</li>
            </ul>
          </div>
        );
      case "Manuals":
        return (
          <div className="p-4 space-y-2">
            <select className="p-2 border rounded">
              <option>Instruction Manual</option>
              <option>Wiring Diagram</option>
              <option>Ladder IO List</option>
            </select>
            <div className="h-64 border rounded flex items-center justify-center text-gray-500">
              [Manual PDF Viewer Placeholder]
            </div>
          </div>
        );
      case "Parts & Wiring":
        return (
          <div className="p-4">
            <p className="mb-2">Wiring schematic + parts data table:</p>
            <div className="h-48 border rounded bg-gray-50 text-center text-gray-500">
              [Wiring Diagram Viewer Placeholder]
            </div>
          </div>
        );
      case "Program Viewer":
        return (
          <div className="p-4 flex gap-4 text-sm">
            <textarea className="w-1/2 h-64 p-2 border font-mono" defaultValue={`$1\nG0X0Z0\nM3S2000`} />
            <textarea className="w-1/2 h-64 p-2 border font-mono" defaultValue={`$2\nM8\nG4U0.5`} />
          </div>
        );
      case "MC Data & Setup Sheets":
        return (
          <div className="p-4">
            <table className="w-full text-sm border">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-2 py-1">Parameter</th>
                  <th className="border px-2 py-1">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border px-2 py-1">#814</td><td className="border px-2 py-1">1.2500</td></tr>
                <tr><td className="border px-2 py-1">#818</td><td className="border px-2 py-1">2.2350</td></tr>
                <tr><td className="border px-2 py-1">#821</td><td className="border px-2 py-1">0.5000</td></tr>
              </tbody>
            </table>
          </div>
        );
      case "Training":
        return (
          <div className="p-4 space-y-2">
            <select className="p-2 border rounded">
              <option>Operation</option>
              <option>Setup</option>
              <option>Macro Programming</option>
              <option>Maintenance</option>
            </select>
            <div className="h-48 border rounded flex items-center justify-center text-gray-500">
              [Training video module placeholder]
            </div>
          </div>
        );
      case "Cincom":
        return (
          <div className="p-4">
            <select className="p-2 border rounded">
              <option>L20E</option>
              <option>L32</option>
              <option>BNA42</option>
            </select>
            <div className="mt-2 text-sm text-gray-600">
              Model selected: L20E — logic loaded.
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
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
