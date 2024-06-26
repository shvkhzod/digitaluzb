// tip-element.js
if (typeof window !== 'undefined' && !window.customElements.get('tip-element')) {
  class TipElement extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: 'open' });

      if (this.shadowRoot) {
        this.shadowRoot.innerHTML = `
          <style>
            /* Define styles for the custom element */
            .tip {
              margin-top: 20px;
              width: fit-content;
              border: 1px solid var(--primary-color);
              background-color: var(--secondary-color);
              border-radius: 16px;
              color: var(--primary-color);
              display: flex;
              flex-direction: row;
              align-items: center;
              padding: 20px;
              gap: 20px;

            }

         

            img {
              width: 36px; /* Adjust width as needed */
              height: 36px; /* Maintain aspect ratio */
              
            }

           
          </style>
         <div class='tip'>
         <img src="/images/lamp.svg" alt="Foundation Image">
         <slot class="content"></slot>
         </div>        `;
      }
    }
  }

  customElements.define('tip-element', TipElement);
}
