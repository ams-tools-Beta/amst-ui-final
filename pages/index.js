import { useState } from 'react';
import '../styles/globals.css';

const tabs = [
  'ShopBot AI',
  'Alarms',
  'Manuals',
  'Parts & Wiring',
  'Program Viewer',
  'MC Data & Setup Sheets',
  'Training',
  'Cincom ▼'
];

const TabContent = ({ tab }) => {
  switch (tab) {
    case 'ShopBot AI':
      return (
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-2">ShopBot AI</h2>
          <div className="border rounded p-2 h-48 mb-2 overflow-auto">[AI assistant chat will appear here]</div>
          <input type="text" placeholder="Ask a question..." className="w-full border rounded p-2" />
        </div>
      );
    case 'Alarms':
      return (
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-2">Alarms</h2>
          <input type="text" placeholder="Search alarm codes..." className="w-full border rounded p-2 mb-2" />
          <ul className="list-disc list-inside text-sm">
            <li>E100 - Main Spindle Overload</li>
            <li>E205 - Axis Servo Error</li>
            <li>E310 - Tool Not Defined</li>
          </ul>
        </div>
      );
    case 'Manuals':
      return (
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-2">Manuals</h2>
          <select className="mb-2 border rounded p-2">
            <option>Instruction Manual</option>
            <option>Wiring Diagram</option>
            <option>Ladder I/O List</option>
          </select>
          <div className="border p-2 h-48 overflow-auto text-center text-gray-500">
            [PDF manual viewer placeholder]
          </div>
        </div>
      );
    case 'Parts & Wiring':
      return (
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-2">Parts & Wiring</h2>
          <p className="text-sm text-gray-600">Click a component to see wiring/part details</p>
          <div className="mt-2 border rounded p-4 text-gray-500">[Interactive wiring diagram placeholder]</div>
        </div>
      );
    case 'Program Viewer':
      return (
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-2">Program Viewer</h2>
          <div className="flex gap-4 text-sm">
            <textarea className="w-1/2 border p-2 h-64 font-mono" defaultValue={`$1\nG0X0Z0\nM3S2000\n...`} />
            <textarea className="w-1/2 border p-2 h-64 font-mono" defaultValue={`$2\nM8\nG4U0.5\n...`} />
          </div>
        </div>
      );
    case 'MC Data & Setup Sheets':
      return (
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-2">MC Data & Setup Sheets</h2>
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
    case 'Training':
      return (
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-2">Training</h2>
          <select className="mb-2 border rounded p-2">
            <option>Operation</option>
            <option>Setup</option>
            <option>Macro Programming</option>
            <option>Maintenance</option>
          </select>
          <div className="border p-2 h-48 overflow-auto text-center text-gray-500">
            [Video player placeholder]
          </div>
        </div>
      );
    case 'Cincom ▼':
      return (
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-2">Cincom Models</h2>
          <select className="border rounded p-2">
            <option>L20E</option>
            <option>L32</option>
            <option>BNA42</option>
          </select>
          <div className="mt-2 text-gray-500">[Model-specific view placeholder]</div>
        </div>
      );
    default:
      return <div />;
  }
};

export default function Home() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">AMST Tools</h1>
      <div className="grid grid-cols-4 gap-3 mb-2">
        {tabs.slice(0, 4).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={\`p-3 rounded-2xl font-medium transition \${activeTab === tab ? 'bg-blue-600 text-white shadow' : 'bg-white text-black border'}\`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-3 mb-4">
        {tabs.slice(4).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={\`p-3 rounded-2xl font-medium transition \${activeTab === tab ? 'bg-blue-600 text-white shadow' : 'bg-white text-black border'}\`}
          >
            {tab}
          </button>
        ))}
      </div>
      <TabContent tab={activeTab} />
    </div>
  );
}
