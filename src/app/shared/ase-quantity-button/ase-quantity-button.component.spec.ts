import { fireEvent, render, screen } from "@testing-library/angular";
import { describe, it, expect } from "vitest";

import { AseQuantityButtonComponent } from "./ase-quantity-button.component";

describe('Quantity button:',() => {

    let decreaseButton: HTMLButtonElement;
    let increaseButton: HTMLButtonElement;

    beforeEach(async () => {
      await render(AseQuantityButtonComponent);

      decreaseButton = screen.getByText("-");
      increaseButton = screen.getByText("+");
    });

    it('should render button', async () => {
      expect(screen.getByText("-"));
      expect(screen.getByText("1"));
      expect(screen.getByText("+"));
    });

    it('should increase quantity', async () => {
      expect(screen.getByText("1"));

      fireEvent.click(increaseButton);
      expect(screen.getByText("2"));
    });

    it('should increase quantity', async () => {
      expect(screen.getByText("1"));

      fireEvent.click(decreaseButton);
      expect(screen.getByText("1"));

      fireEvent.click(increaseButton);
      fireEvent.click(increaseButton);
      fireEvent.click(increaseButton);

      fireEvent.click(decreaseButton);
      expect(screen.getByText("3"));
    });
});
