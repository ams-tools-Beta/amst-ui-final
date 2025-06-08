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

const TabContent = ({ tab }) => (
  <div className="mt-6 p-4 bg-white rounded-xl shadow">
    <h2 className="text-xl font-semibold">{tab}</h2>
    <p className="text-gray-600 mt-2">Content for {tab} goes here.</p>
  </div>
);

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
      <div className="grid grid-cols-4 gap-3">
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