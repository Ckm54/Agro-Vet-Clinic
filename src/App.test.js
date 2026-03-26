import { render, screen } from '@testing-library/react';
import App from './App';

// Keep routing tests stable and fast by mocking page modules.
jest.mock('./pages/Home', () => () => <div>HOME_PAGE</div>);
jest.mock('./pages/services', () => () => <div>SERVICES_PAGE</div>);
jest.mock('./pages/ContactUs', () => () => <div>CONTACT_PAGE</div>);

function renderAt(path) {
  window.history.pushState({}, 'Test page', path);
  return render(<App />);
}

describe('App routing', () => {
  test('renders Home on /', () => {
    renderAt('/');
    expect(screen.getByText('HOME_PAGE')).toBeInTheDocument();
  });

  test('renders Services on /services', () => {
    renderAt('/services');
    expect(screen.getByText('SERVICES_PAGE')).toBeInTheDocument();
  });

  test('renders Contact Us on /contact', () => {
    renderAt('/contact');
    expect(screen.getByText('CONTACT_PAGE')).toBeInTheDocument();
  });
});

