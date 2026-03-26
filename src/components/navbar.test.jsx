import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Navbar from './navbar';

function TestShell({ initialPath = '/' }) {
  return (
    <MemoryRouter initialEntries={[initialPath]}>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>HOME_SCREEN</div>} />
        <Route path="/services" element={<div>SERVICES_SCREEN</div>} />
        <Route path="/contact" element={<div>CONTACT_SCREEN</div>} />
      </Routes>
    </MemoryRouter>
  );
}

describe('Navbar', () => {
  test('navigates to Services and Contact Us', async () => {
    const user = userEvent.setup();
    render(<TestShell initialPath="/" />);

    // Home route content is visible initially.
    expect(screen.getByText('HOME_SCREEN')).toBeInTheDocument();

    await user.click(screen.getByRole('link', { name: /services/i }));
    expect(screen.getByText('SERVICES_SCREEN')).toBeInTheDocument();

    await user.click(screen.getByRole('link', { name: /contact us/i }));
    expect(screen.getByText('CONTACT_SCREEN')).toBeInTheDocument();
  });
});

