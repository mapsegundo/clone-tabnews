import { useState, useEffect } from "react";
import motivationalMessages from "utils/frases";

function Home() {
  const firstMessage = "De: Shall\nPara: Jeh\nTe amo meu amor ❤️!";
  const [text, setText] = useState("");
  const [showSecondMessage, setShowSecondMessage] = useState(false);
  const [randomMessage, setRandomMessage] = useState("");

  useEffect(() => {
    // Seleciona uma frase aleatória do array
    const randomIndex = Math.floor(Math.random() * motivationalMessages.length);
    setRandomMessage(motivationalMessages[randomIndex]);

    // Exibe a primeira frase com efeito de digitação
    let index = 0;
    const interval = setInterval(() => {
      if (index <= firstMessage.length) {
        setText(firstMessage.substring(0, index));
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowSecondMessage(true), 500);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.primaryText}>{text}</h1>
      {showSecondMessage && (
        <div style={styles.speechBubble}>
          <p style={styles.secondaryText}>{randomMessage}</p>
          <div style={styles.speechTriangle}></div>
        </div>
      )}
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @media (max-width: 768px) {
            h1 {
              font-size: 2rem !important;
            }
            .speechBubble {
              padding: 15px !important;
              font-size: 1rem !important;
            }
          }

          @media (max-width: 480px) {
            h1 {
              font-size: 1.5rem !important;
            }
            .speechBubble {
              padding: 10px !important;
              font-size: 0.9rem !important;
              max-width: 90% !important;
            }
          }
        `}
      </style>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    backgroundImage: "url('/image.png')", // Referência à imagem importada
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    fontFamily: "'Courier New', Courier, monospace",
    textAlign: "center",
    overflow: "hidden",
    padding: "0 20px",
  },
  primaryText: {
    color: "#555555",
    fontSize: "2.5rem",
    fontWeight: "bold",
    whiteSpace: "pre-wrap",
    margin: "10px 0",
  },
  speechBubble: {
    position: "relative",
    backgroundColor: "#ffffff",
    borderRadius: "15px",
    padding: "20px",
    color: "#444444",
    fontSize: "1.2rem",
    lineHeight: "1.5",
    maxWidth: "80%",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
    animation: "fadeIn 2s forwards",
    marginTop: "20px",
  },
  speechTriangle: {
    content: "''",
    position: "absolute",
    bottom: "-15px",
    left: "20px",
    width: "0",
    height: "0",
    borderLeft: "15px solid transparent",
    borderRight: "15px solid transparent",
    borderTop: "15px solid #ffffff",
  },
  secondaryText: {
    margin: "0",
  },
};

export default Home;
