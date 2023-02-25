import { render, screen } from '@testing-library/react'
import { Application } from './Application'

describe('Application', () => {
  test('renders correctly', () => {
    render(<Application />)

    const pageHeading = screen.getByRole('heading', {
      // name: "Job application form"
      level: 1, // heading level
    })
    expect(pageHeading).toBeInTheDocument()

    const sectionHeading = screen.getByRole('heading', {
      // name: "Section 1"
      level: 2, // heading level
    })
    expect(sectionHeading).toBeInTheDocument()

    const paragraphElement = screen.getByText('All fields are mandatory')
    expect(paragraphElement).toBeInTheDocument()

    const imgElement = screen.getByAltText('a person with a laptop')
    expect(imgElement).toBeInTheDocument()

    const closeElement = screen.getByTitle('close')
    expect(closeElement).toBeInTheDocument()

    const customElement = screen.getByTestId('custom-element')
    expect(customElement).toBeInTheDocument()

    const nameElement = screen.getByRole('textbox', {
      name: 'Name', // label text
    })
    expect(nameElement).toBeInTheDocument()

    // find input by label text
    const nameElement2 = screen.getByLabelText('Name', {
      selector: 'input',
    })
    expect(nameElement2).toBeInTheDocument()
    expect(nameElement2).toHaveValue('Vishwas')

    const nameElement3 = screen.getByPlaceholderText('Fullname')
    expect(nameElement3).toBeInTheDocument()

    const nameElement4 = screen.getByDisplayValue('Vishwas')
    expect(nameElement4).toBeInTheDocument()

    const bioElement = screen.getByRole('textbox', {
      name: 'Bio', // label text
    })
    expect(bioElement).toBeInTheDocument()

    const jobLocationElement = screen.getByRole('combobox')
    expect(jobLocationElement).toBeInTheDocument()

    const termsElement = screen.getByRole('checkbox')
    expect(termsElement).toBeInTheDocument()

    const termsElement2 = screen.getByLabelText(
      'I agree to the terms and conditions'
    )
    expect(termsElement2).toBeInTheDocument()

    // comment
    const submitBtnElement = screen.getByRole('button')
    expect(submitBtnElement).toBeInTheDocument()
    expect(submitBtnElement).toBeDisabled()
  })
})
