import { render, screen } from '@testing-library/react';
import ContactUsForm from './contactUsForm';

describe('ContactUsForm', () => {
  test('renders key fields and submit button', () => {
    render(<ContactUsForm />);

    expect(
      screen.getByRole('heading', { name: /send us a message/i })
    ).toBeInTheDocument();

    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/animal type/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^message$/i)).toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: /send message/i })
    ).toBeInTheDocument();
  });

  test('marks inputs as required and contains expected animal options', () => {
    render(<ContactUsForm />);

    const fullName = screen.getByLabelText(/full name/i);
    const phone = screen.getByLabelText(/phone number/i);
    const email = screen.getByLabelText(/email address/i);
    const animalType = screen.getByLabelText(/animal type/i);
    const message = screen.getByLabelText(/^message$/i);

    expect(fullName).toBeRequired();
    expect(phone).toBeRequired();
    expect(email).toBeRequired();
    expect(animalType).toBeRequired();
    expect(message).toBeRequired();

    // Options (exact display text from the component)
    expect(screen.getByRole('option', { name: /select animal type/i })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Cattle' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Goats & Sheep' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Dogs' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Cats' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Poultry' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Horses & Donkeys' })).toBeInTheDocument();
  });
});

