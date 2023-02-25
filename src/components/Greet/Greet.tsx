import type { GreepPrps } from './greet.types'

export const Greet = (props: GreepPrps) => {
  const { name, theme } = props

  if (theme) {
    return <div>Themed Greet</div>
  }

  return <div>Hello {name || 'Guest'}</div>
}
