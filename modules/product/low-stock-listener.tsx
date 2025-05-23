import { useEffect } from "react";
import { io } from "socket.io-client";

function LowStockListener() {
  useEffect(() => {
    console.log("Socket connected");
    const socket = io(
      process.env.NEXT_PUBLIC_SOCKET_URL || "http://localhost:8080"
    );
    socket.on("lowStock", (product) => {
      console.log(product);
      alert(
        `Product "${product.name}" is running low! Quantity: ${product.quantity}`
      );
      // Or update your state/UI as needed
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  return null; // Or your UI
}

export default LowStockListener;
