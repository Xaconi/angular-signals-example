import { render, screen } from "@testing-library/angular";
import { describe, it, expect } from "vitest";
import { AseHeaderComponent } from "./ase-header.component";

describe('Header:',() => {

    it('should render component', () => {
        render(AseHeaderComponent);
    });

    it('should render page title', async () => {
      await render(AseHeaderComponent);
      expect(screen.getByText("Amiibo Store"));
    })

    it('should render github link', async () => {
      await render(AseHeaderComponent);
      expect(screen.getByTitle("GitHub Repo"));
    })
});
