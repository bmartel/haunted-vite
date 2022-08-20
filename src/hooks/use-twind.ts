import { useLayoutEffect } from 'haunted'
import { create, cssomSheet, SheetConfig } from 'twind'

export const supportsAdoptingStyleSheets =
  window.ShadowRoot &&
  ((window as any).ShadyCSS === undefined || (window as any).ShadyCSS.nativeShadow) &&
  'adoptedStyleSheets' in Document.prototype &&
  'replace' in CSSStyleSheet.prototype

export const createCssSheet = () => {
  const sheet = cssomSheet({ target: new CSSStyleSheet() })

  return {
    sheet,
    config: create({ sheet }),
  }
}

export const adoptStyles = (el: HTMLElement, sheet: SheetConfig<CSSStyleSheet>) => {
  if (supportsAdoptingStyleSheets) {
    ;(el.shadowRoot as any).adoptedStyleSheets = [sheet.target]
  }
}

export const useTwind = (el: HTMLElement, sheet: SheetConfig<CSSStyleSheet>) => {
  useLayoutEffect(() => {
    adoptStyles(el, sheet)
  }, [sheet])
}

