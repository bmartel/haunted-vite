import { html, component } from 'haunted'
import { apply } from 'twind/css'
import { createCssSheet, useTwind } from '../hooks/use-twind'

export type ViewIndexProps = Record<string, never>

const {
  sheet,
  config: { tw },
} = createCssSheet()

type HeadingProps = {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  value: string
}

const sizes = {
  xs: apply`text-sm lg:text-base`,
  sm: apply`text-base lg:text-lg`,
  md: apply`text-lg lg:text-xl`,
  lg: apply`text-xl lg:text-2xl`,
  xl: apply`text-2xl lg:text-3xl`,
  '2xl': apply`text-3xl lg:text-4xl`,
}

function Heading({ size = 'md', value }: HeadingProps) {
  useTwind(this, sheet)

  return html`<h1 id="title" class=${tw`font-bold ${sizes[size]}`}>${value}</h1>`
}

customElements.define('text-heading', component<HeadingProps & HTMLElement>(Heading))

function ViewIndex() {
  return html` <text-heading .size=${'xl'} .value=${'Vite + Haunted'}></text-heading> `
}

customElements.define('view-index', component<ViewIndexProps & HTMLElement>(ViewIndex))
