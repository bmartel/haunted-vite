import { atom, useAtom } from '@martel/ripple'
import { html, component } from 'haunted'

export type ViewIndexProps = Record<string, never>

const showTitleAtom = atom(true)

type HeadingProps = {
  value: string
}

function Heading({ value }: HeadingProps) {
  const [show] = useAtom(showTitleAtom)

  if (!show) return html``
  return html`<h1 id="title">${value}</h1>`
}

customElements.define('text-heading', component<HeadingProps & HTMLElement>(Heading))

function ViewIndex() {
  const [show, setShowTitle] = useAtom(showTitleAtom)
  return html`
    <text-heading .value=${'Vite + Haunted'}></text-heading>
    <button @click=${() => setShowTitle(!show)}>Toggle</button>
  `
}

customElements.define('view-index', component<ViewIndexProps & HTMLElement>(ViewIndex))
