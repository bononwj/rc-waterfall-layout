import "./App.css";
import WaterfallLayout from "./WaterfallLayout";

function fakeList() {
  return Array.from({ length: 100 }).map(() => {
    return {
      width: Math.round(Math.random() * 100) + 100,
      height: Math.round(Math.random() * 100) + 100,
    };
  });
}

function App() {
  return (
    <div
      style={{
        width: 800,
        margin: "0 auto",
        backgroundColor: "#f5f5f5",
      }}
    >
      <WaterfallLayout
        list={fakeList()}
        columnCount={4}
        gutter={[24, 24]}
        item={(item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#e5e5e5",
              width: "100%",
              height: "100%",
              marginBottom: 16,
              borderRadius: 4,
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 24,
            }}
          >
            <span style={{ color: "#666" }}>
              {item.width}x{item.height}
            </span>
            <div>{index + 1}</div>
          </div>
        )}
      />
    </div>
  );
}

export default App;
