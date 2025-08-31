import FloatingBubbles from "@/components/FloatingBubbles/FloatingBubbles";

const HomePage = () => {
  return (
    <div style={{ position: "relative", height: "100vh", background: "#1e1e2f" }}>
      <FloatingBubbles count={50} />
      <div style={{ position: "relative", zIndex: 10, textAlign: "center", paddingTop: "40vh", color: "white" }}>
        <h1>Hello Next.js Bubbles!</h1>
      </div>
    </div>
  );
};

export default HomePage;
