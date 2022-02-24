import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import { Async } from '.'

test('it render correctly', async () => {
  render(<Async />)

  expect(screen.getByText('Hello world!')).toBeInTheDocument()
  // expect(await screen.findByText('Button')).toBeInTheDocument()

  await waitForElementToBeRemoved(screen.queryByText('Button'))
})