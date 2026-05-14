import { pill } from "../constants/styles";

const TABS = [
  { id: "chat",    label: "💬 Chat" },
  { id: "profile", label: "🧑‍🌾 Farm Profile" },
  { id: "about",   label: "ℹ️ About" },
];

/**
 * Three-tab navigation bar.
 * @prop {string}   activeTab
 * @prop {Function} setActiveTab
 */
export default function TabBar({ activeTab, setActiveTab }) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 760,
        display: "flex",
        gap: 8,
        marginBottom: 16,
      }}
    >
      {TABS.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          style={pill(activeTab === tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
