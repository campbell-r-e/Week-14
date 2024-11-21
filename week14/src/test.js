

import { render, screen, fireEvent } from '@testing-library/react';
import Render from './pages/index'; // Adjust path as necessary

describe('Home Page and Form', () => {
  it('loads the home page and finds the numerical input for user check-ins', () => {
  
    render(<Render />);

   
    const inputElement = screen.getByLabelText(/enter a number:/i);  


    expect(inputElement).toBeInTheDocument();

 
    fireEvent.change(inputElement, { target: { value: '40' } });
    const button = screen.getByRole('button', {  name: /Save/i  });
    fireEvent.click(button);

   
    const readonlyInput = screen.getByDisplayValue('40');
   expect(readonlyInput).toBeInTheDocument();

  });
});
// from online resource