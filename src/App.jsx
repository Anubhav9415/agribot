import { useState } from "react";
import { colors }    from "./constants/styles";
import Header        from "./components/Header";
import TabBar        from "./components/TabBar";
import ChatWindow    from "./components/ChatWindow";
import FarmProfile   from "./components/FarmProfile";
import AboutTab      from "./components/AboutTab";

/**
 * Root component — owns shared state (activeTab, farmProfile) and
 * renders the correct tab component beneath the header.
 */
export default function App() {
  const [activeTab,   setActiveTab]   = useState("chat");
  const [farmProfile, setFarmProfile] = useState({
    state: "",
    soil:  "",
    acres: "",
    crops: "",
  });

  return (
    <div
      style={{
        fontFamily:    "'Nunito', 'Segoe UI', sans-serif",
        minHeight:     "100vh",
        background:    `linear-gradient(135deg, ${colors.darkBg} 0%, ${colors.darkCard} 50%, #0A2818 100%)`,
        display:       "flex",
        flexDirection: "column",
        alignItems:    "center",
        padding:       16,
        color:         colors.offWhite,
      }}
    >
      <Header />

      <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div style={{ width: "100%", maxWidth: 760, flex: 1 }}>
        {activeTab === "chat" && (
          <ChatWindow farmProfile={farmProfile} />
        )}
        {activeTab === "profile" && (
          <FarmProfile profile={farmProfile} setProfile={setFarmProfile} />
        )}
        {activeTab === "about" && <AboutTab />}
      </div>
    </div>
  );
}
