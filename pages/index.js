import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("ShopBot AI");
  const [shopbotInput, setShopbotInput] = useState("");
  const [shopbotResponse, setShopbotResponse] = useState("");
  const [alarmSearch, setAlarmSearch] = useState("");
  const [manual, setManual] = useState("Instruction Manual.pdf");
  const [macros, setMacros] = useState([
    { id: "#814", value: "1.2500", meaning: "Chucking Position" },
    { id: "#818", value: "2.2350", meaning: "Total Machining Length" },
    { id: "#821", value: "0.5000", meaning: "Part Stick-Out (Sub)" }
  ]);

  const handleMacroChange = (index, newVal) => {
    const updated = [...macros];
    updated[index].value = newVal;
    setMacros(updated);
  };

  const handleShopbotSubmit = () => {
    const ref = {
      "#814": "Chucking position of part on main spindle",
      "#818": "Total machine travel required for full part + cutoff",
      "#821": "Distance part sticks out of sub spindle collet",
      "G165": "Optional synchronized spindle function",
      "/MB1": "Coolant line 1 control (on/off toggle)"
    };
    const match = Object.keys(ref).find(k => shopbotInput.includes(k));
    setShopbotResponse(match ? ref[match] : "No match found.");
  };

  const alarms = [
    "E100 – Main Spindle Overload",
    "E205 – Axis Servo Error",
    "E310 – Tool Not Defined",
    "E402 – Turret Misalignment",
    "E508 – Door Interlock Open"
  ];
  const filteredAlarms = alarms.filter(a => a.toLowerCase().includes(alarmSearch.toLowerCase()));

  const renderTabContent = () => {
    switch (activeTab) {
      case "ShopBot AI":
        return (
          <div className="p-4 space-y-2">
            <input className="w-full p-2 border rounded" placeholder="Ask ShopBot…" value={shopbotInput} onChange={e => setShopbotInput(e.target.value)} />
            <button onClick={handleShopbotSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
            <div className="border p-2 rounded bg-gray-50">{shopbotResponse}</div>
          </div>
        );
      case "Alarms":
        return (
          <div className="p-4">
            <input placeholder="Search alarms…" className="p-2 w-full border mb-2 rounded" onChange={(e) => setAlarmSearch(e.target.value)} />
            <ul className="list-disc ml-5 text-sm">
              {filteredAlarms.map((a, i) => <li key={i}>{a}</li>)}
            </ul>
          </div>
        );
      case "Manuals":
        return (
          <div className="p-4 space-y-2">
            <select className="p-2 border rounded" onChange={(e) => setManual(e.target.value)}>
              <option>Instruction Manual.pdf</option>
              <option>Wiring Diagram.pdf</option>
              <option>Parts List.pdf</option>
              <option>Ladder IO List.pdf</option>
            </select>
            <iframe src={"/manuals/" + manual} className="w-full h-64 border rounded bg-white" title="PDF viewer" />
          </div>
        );
      case "Parts & Wiring":
        return (
          <div className="p-4 space-y-2">
            <div className="text-sm text-gray-700">Diagram: Wiring_diagram.pdf</div>
            <iframe src="/manuals/Wiring_diagram.pdf" className="w-full h-64 border rounded bg-white" />
          </div>
        );
      case "Program Viewer":
        return (
          <div className="p-4 flex gap-4">
            <textarea className="w-1/2 h-64 p-2 border font-mono text-sm" defaultValue={`$1\n/M52\nM6\nG0X#814+0.100`} />
            <textarea className="w-1/2 h-64 p-2 border font-mono text-sm" defaultValue={`$2\nM51\nG4U1.0\nM98H1000`} />
          </div>
        );
      case "MC Data & Setup Sheets":
        return (
          <div className="p-4 space-y-2">
            <table className="w-full text-sm border">
              <thead><tr className="bg-gray-100"><th className="border px-2">Macro</th><th className="border px-2">Value</th><th className="border px-2">Meaning</th></tr></thead>
              <tbody>
                {macros.map((m, i) => (
                  <tr key={i}>
                    <td className="border px-2">{m.id}</td>
                    <td className="border px-2">
                      <input value={m.value} onChange={e => handleMacroChange(i, e.target.value)} className="w-full px-1 border rounded" />
                    </td>
                    <td className="border px-2">{m.meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="mt-2 bg-green-600 text-white px-4 py-1 rounded">Export to PDF</button>
          </div>
        );
      case "Training":
        return (
          <div className="p-4 space-y-2">
            <select className="p-2 border rounded"><option>Setup</option><option>Macros</option></select>
            <div className="h-48 border rounded bg-gray-50 flex items-center justify-center text-gray-500">[Video module placeholder]</div>
          </div>
        );
      case "Cincom":
        return (
          <div className="p-4 space-y-2">
            <select className="p-2 border rounded"><option>L20E</option><option>L32</option><option>BNA42</option></select>
            <div className="text-sm text-gray-600">Model logic applied per dropdown</div>
          </div>
        );
      default: return null;
    }
  };

  const tabs = ["ShopBot AI","Alarms","Manuals","Parts & Wiring","Program Viewer","MC Data & Setup Sheets","Training","Cincom"];
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">AMS TOOLS</h1>
      <div className="grid grid-cols-4 gap-4 mb-6">
        {tabs.map(tab => (
          <button key={tab} className={\`\${activeTab === tab ? "bg-blue-600 text-white" : "bg-white text-black border"} p-3 rounded-2xl font-medium shadow\`} onClick={() => setActiveTab(tab)}>
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
