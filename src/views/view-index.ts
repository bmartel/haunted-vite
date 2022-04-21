import { html, component } from 'haunted'

function ViewIndex() {
  return html`
    <style>
      :host {
        display: block;
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        height: 100%;
        width: 100%;
      }
    </style>

    <h1 id="title">Vite + Haunted</h1>
  `
}

customElements.define('view-index', component<any>(ViewIndex))
