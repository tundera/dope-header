import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  const articleText = screen.getByText(
    /totally blowing up on twitter jay rosen sloan monetization people formerly known as the audience, copyright journal register recontextualize fourth estate fuego link economy dan fleckner the notion of the public\. gamification going forward just across the wire stream the notional night cops reporter in des moines\. the printing press as an agent of change gutenberg newspaper ipad app, kindle single try pr wikileaks quora metered model right\-sizing try pr\./i,
  )
  expect(articleText).toBeInTheDocument()
})
