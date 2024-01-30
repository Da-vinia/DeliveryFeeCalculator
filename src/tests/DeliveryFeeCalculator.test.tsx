import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import DeliveryFeeCalculator from "../pages/DeliveryFeeCalculator";

describe("DeliveryFeeCalculator", () => {
  it("calculates delivery fee correctly for a standard order", () => {
    render(<DeliveryFeeCalculator />);

    fireEvent.change(screen.getByTestId("cartValue"), {
      target: { value: "20.00" },
    });
    fireEvent.change(screen.getByTestId("deliveryDistance"), {
      target: { value: "1500" },
    });
    fireEvent.change(screen.getByTestId("numItems"), {
      target: { value: "4" },
    });
    fireEvent.change(screen.getByTestId("orderTime"), {
      target: { value: new Date("2024-01-24T12:00:00Z").toString() },
    });

    fireEvent.click(screen.getByTestId("calculateButton"));

    expect(screen.getByTestId("fee").textContent).toBe("3.00€");
  });

  it("handles small order surcharge correctly", () => {
    render(<DeliveryFeeCalculator />);
    
    fireEvent.change(screen.getByTestId("cartValue"), {
      target: { value: "8.90" }, 
    });
  
    fireEvent.click(screen.getByTestId("calculateButton"));
  
    expect(screen.getByTestId("fee").textContent).toBe("3.10€"); 
  });
  
  it("handles additional distance fee correctly", () => {
    render(<DeliveryFeeCalculator />);
  
    fireEvent.change(screen.getByTestId("deliveryDistance"), {
      target: { value: "1501" },
    });
  
    fireEvent.click(screen.getByTestId("calculateButton"));
  
    expect(screen.getByTestId("fee").textContent).toBe("4.00€"); 
  });
  
  it("handles items surcharge correctly", () => {
    render(<DeliveryFeeCalculator />);
  
    fireEvent.change(screen.getByTestId("numItems"), {
      target: { value: "5" }, 
    });
  
    fireEvent.click(screen.getByTestId("calculateButton"));
  
    expect(screen.getByTestId("fee").textContent).toBe("3.50€"); 
  });
  
  it("handles bulk fee correctly", () => {
    render(<DeliveryFeeCalculator />);
  
    fireEvent.change(screen.getByTestId("numItems"), {
      target: { value: "13" }, 
    });
  
    fireEvent.click(screen.getByTestId("calculateButton"));
  
    expect(screen.getByTestId("fee").textContent).toBe("6.20€"); 
  });
  
  it("handles free delivery correctly for cart value >= 200€", () => {
    render(<DeliveryFeeCalculator />);
  
    fireEvent.change(screen.getByTestId("cartValue"), {
      target: { value: "200" }, 
    });
  
    fireEvent.click(screen.getByTestId("calculateButton"));
  
    expect(screen.getByTestId("fee").textContent).toBe("0.00€"); 
  });

  fireEvent.click(screen.getByTestId("calculateButton"));
  
    expect(screen.getByTestId("fee").textContent).toBe("3.60€"); 
  });
  