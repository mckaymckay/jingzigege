import { useContext } from "react";
import { LevelContext } from "./LevelContext";

export default function Section({ children }) {
  const { level } = useContext(LevelContext);
  return (
    <section className="section">
      {/* 若Section的任何子组件请求LevelContext，就给他们level */}
      <LevelContext.Provider value={{ level: level + 1, value2: 999 }}>
        {children}
      </LevelContext.Provider>

    </section>
  );
}
