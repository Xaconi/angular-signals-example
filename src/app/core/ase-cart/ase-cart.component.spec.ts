import { render, screen } from "@testing-library/angular";
import { describe, it, expect, vi } from "vitest";

import { AseCartComponent } from "./ase-cart.component";

import AmiiboItemMock from "../../mocks/amiibo";

describe('Cart:',() => {

    it('should render component', () => {
        render(AseCartComponent);
    });

    it('should render cart', async () => {
      await render(AseCartComponent);
      expect(screen.getByAltText("Cart"));
    });

    it('should update cart correctly', async () => {
      const { fixture, rerender } = await render(AseCartComponent);

      expect(screen.getByText("0"));

      fixture.componentInstance['_cartService'].addToCart(AmiiboItemMock, 2);

      rerender();
      expect(screen.getByText("2"));
    });


});
