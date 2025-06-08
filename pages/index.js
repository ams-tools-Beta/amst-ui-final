import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("ShopBot AI");
  const [shopbotInput, setShopbotInput] = useState("");
  const [shopbotResponse, setShopbotResponse] = useState("");

  const handleShopbotSubmit = () => {
    const macroHelp = {
      "#814": "Represents chucking position (part zero) on main spindle.",
      "#818": "Total length required to machine part including cutoff, clearance, facing.",
      "#821": "Stick-out value: how far part extends from sub-spindle collet.",
      "G165": "Custom command used on Citizen for synchronized stop/start — optional feature.",
      "/MB1": "High pressure coolant control — line 1 (same code toggles ON/OFF)."
    };
    let reply = shopbotInput.trim();
    for (const key in macroHelp) {
      if (reply.includes(key)) {
        setShopbotResponse(`${key}: ${macroHelp[key]}`);
        return;
      }
    }
    setShopbotResponse("No match found. Try #814, G165, or /MBx.");
  };

  const alarmList = [
    "E100 – Main Spindle Overload",
    "E205 – Axis Servo Error",
    "E310 – Tool Not Defined",
    "E402 – Turret Misalignment",
    "E508 – Door Interlock Open"
  ];

  const manuals = [
    "1) Inquiry_E.pdf",
    "2) Instruction Manual.pdf",
    "3) Parts_List.pdf",
    "4) Wiring_diagram.pdf",
    "5) Ladder_IO_List.pdf",
    "6) Introduction Manual.pdf"
  ];

  const [manual, setManual] = useState(manuals[1]);
  const [selectedModel, setSelectedModel] = useState("L20E");

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
              placeholder="Ask about #814, G165, etc."
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
            <input
              className="p-2 border w-full mb-2 rounded"
              placeholder="Search alarms..."
              onChange={(e) => {}}
            />
            <ul className="list-disc ml-5 text-sm">
              {alarmList.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        );
      case "Manuals":
        return (
          <div className="p-4 space-y-2">
            <select className="p-2 border rounded" onChange={(e) => setManual(e.target.value)}>
              {manuals.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
            <div className="h-64 border rounded flex items-center justify-center text-gray-500">
              Viewing: {manual}
            </div>
          </div>
        );
      case "Parts & Wiring":
        return (
          <div className="p-4">
            <div className="text-sm mb-2">File: 3) Parts_List.pdf + 4) Wiring_diagram.pdf</div>
            <div className="h-48 border rounded bg-gray-50 flex items-center justify-center text-gray-500">
              [Diagram + Table Viewer Placeholder]
            </div>
          </div>
        );
      case "Program Viewer":
        return (
          <div className="p-4 flex gap-4 text-sm">
            <textarea className="w-1/2 h-64 p-2 border font-mono" defaultValue={`$1\nG0X#814+.100\nG50Z0.540\n/M52\nM6`} />
            <textarea className="w-1/2 h-64 p-2 border font-mono" defaultValue={`$2\nM51\nG4U1.0\nM98H1000`} />
          </div>
        );
      case "MC Data & Setup Sheets":
        return (
          <div className="p-4">
            <table className="w-full text-sm border">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-2 py-1">Macro</th>
                  <th className="border px-2 py-1">Value</th>
                  <th className="border px-2 py-1">Meaning</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border px-2 py-1">#814</td><td className="border px-2 py-1">1.2500</td><td className="border px-2 py-1">Chucking Position</td></tr>
                <tr><td className="border px-2 py-1">#818</td><td className="border px-2 py-1">2.2350</td><td className="border px-2 py-1">Total Machining Length</td></tr>
                <tr><td className="border px-2 py-1">#821</td><td className="border px-2 py-1">0.5000</td><td className="border px-2 py-1">Part Stick-Out (Sub)</td></tr>
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
          <div className="p-4 space-y-2">
            <select
              className="p-2 border rounded"
              onChange={(e) => setSelectedModel(e.target.value)}
            >
              <option value="L20E">L20E</option>
              <option value="L32">L32</option>
              <option value="BNA42">BNA42</option>
            </select>
            <div className="text-gray-600 text-sm">Active Model: {selectedModel}</div>
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
