import { HttpClientModule } from "@angular/common/http";
import { fireEvent, render, screen } from "@testing-library/angular";
import { describe, it, expect, vi, MockInstance } from "vitest";
import { of } from "rxjs";

import { HomeComponent } from "./home.component";

import { AmiiboService } from "../../services/amiibo.service";

import AmiiboItemsMock from "../../mocks/amiibos";
import AmiiboSeriesMock from "../../mocks/series";
import AmiiboTypeMock from "../../mocks/type";
import AmiiboCharacterMock from "../../mocks/character";

const amiiboServiceMock = {
  getAmiibos: () => of(AmiiboItemsMock),
  getAmiiboByHead: () => of(AmiiboItemsMock),
  getAmiiboSeries: () => of(AmiiboSeriesMock),
  getAmiiboTypes: () => of(AmiiboTypeMock),
  getAmiiboCharacters: () => of(AmiiboCharacterMock)
}

describe('Home:',() => {

  let mock: MockInstance;
  let mockSeries: MockInstance;

    beforeEach(() => {
      mock = vi
      .spyOn(AmiiboService.prototype, "getAmiibos")
      .mockImplementation(() => amiiboServiceMock.getAmiibos());

      mockSeries = vi
      .spyOn(AmiiboService.prototype, "getAmiiboSeries")
      .mockImplementation(() => amiiboServiceMock.getAmiiboSeries());
    })

    it('should render component', () => {
        render(HomeComponent, {
          imports: [HttpClientModule]
        });
    });

    it('should render items correctly', async () => {
      await render(HomeComponent, {
        imports: [HttpClientModule]
      });

      expect(screen.getAllByText(AmiiboItemsMock.amiibo[0].name));
      expect(mock).toHaveBeenCalled();
    });

    it('should render filters correctly', async () => {
      await render(HomeComponent, {
        imports: [HttpClientModule]
      });

      const selects: Array<HTMLSelectElement> = screen.getAllByRole("combobox");
      const series = selects[0].options[selects[0].options.selectedIndex];
      const type = selects[1].options[selects[1].options.selectedIndex];
      const character = selects[2].options[selects[2].options.selectedIndex];

      expect(series.textContent).toBe("GAME SERIES");
      expect(type.textContent).toBe("TYPE");
      expect(character.textContent).toBe("CHARACTER");
    });

    it('should change filters correctly', async () => {
      const component = await render(HomeComponent, {
        imports: [HttpClientModule]
      });

      expect(screen.getAllByText(AmiiboItemsMock.amiibo[0].name));
      expect(mock).toHaveBeenCalled();

      vi
        .spyOn(AmiiboService.prototype, "getAmiibos")
        .mockImplementation(() => of({ amiibo: [] }));

      const selects = screen.getAllByRole("combobox");
      fireEvent.change(selects[0], { target: { value: 1 }});

      await component.rerender();

      const matches = await screen.queryAllByText(AmiiboItemsMock.amiibo[0].name);
      expect(matches.length).toBe(0);
    });
});
