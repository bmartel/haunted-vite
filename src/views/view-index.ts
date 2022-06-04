import { html, component } from 'haunted'

export type ViewIndexProps = Record<string, never>

function ViewIndex() {
  return html`
    <style>
      :host {
        display: block;
        box-sizing: border-box;
        height: 100%;
        width: 100%;
      }
    </style>

    <h1 id="title">Vite + Haunted</h1>
  `
}

customElements.define('view-index', component<ViewIndexProps & HTMLElement>(ViewIndex))
