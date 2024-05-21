import { fireEvent, render, screen } from "@testing-library/angular";
import { describe, it, expect, vi, MockInstance } from "vitest";

import { AmiiboItemComponent } from "./amiibo-item.component";

import AmiiboItemMock from "../../../../mocks/amiibo";

import { CartService } from "../../../../services/cart.service";

let mock: MockInstance;

describe('Amiibo item:',() => {

    beforeEach(async () => {
      await render(AmiiboItemComponent, {
        componentInputs: {
          item: AmiiboItemMock
        }
      });

      mock = vi
        .spyOn(CartService.prototype, "addToCart");
    })

    it('should render component', () => {
        expect(true).toBeTruthy();
    });

    it('should render title', async () => {
      expect(screen.getByText(AmiiboItemMock.name));
      expect(screen.getByText("ADD TO CART"));
      expect(screen.getByText("0.00$"));
    });

    it('should add to cart', async () => {
      const addToCartBtn = screen.getByText("ADD TO CART");
      fireEvent.click(addToCartBtn);

      expect(mock).toHaveBeenCalledTimes(1);
    });
});
