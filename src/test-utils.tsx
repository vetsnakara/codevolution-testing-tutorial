import { render, RenderOptions } from '@testing-library/react'
import { ReactElement } from 'react'
import { AppProviders } from './providers/AppProviders'

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AppProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
