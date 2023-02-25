import { render, screen } from '@testing-library/react'
import { Greet } from './Greet'

describe('Greet', () => {
  test('Greet renders correctly', () => {
    render(<Greet />)
    const textElement = screen.getByText(/hello/i)
    expect(textElement).toBeInTheDocument()
  })

  test('Greet render with a name', () => {
    render(<Greet name="Kostya" />)
    const textElement = screen.getByText('Hello Kostya')
    expect(textElement).toBeInTheDocument()
  })
})
