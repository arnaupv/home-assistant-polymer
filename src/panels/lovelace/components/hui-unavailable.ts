import {
  html,
  LitElement,
  TemplateResult,
  CSSResult,
  css,
  customElement,
  property,
} from "lit-element";

@customElement("hui-unavailable")
export class HuiUnavailable extends LitElement {
  @property() public text?: string;

  protected render(): TemplateResult {
    return html`
      <div class="disabled-overlay"></div>
      <div class="disabled-overlay-text">${this.text}</div>
    `;
  }

  static get styles(): CSSResult {
    return css`
      .disabled-overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: var(--state-icon-unavailable-color);
        opacity: 0.6;
        z-index: 50;
      }

      .disabled-overlay-text {
        position: absolute;
        top: 50%;
        left: 50%;
        font-size: 24px;
        text-align: center;
        color: var(--primary-text-color);
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        z-index: 50;
        opacity: 0.7;
      }
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hui-unavailable": HuiUnavailable;
  }
}
