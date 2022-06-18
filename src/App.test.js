import { render, screen } from '@testing-library/react';
import App from './App';

test('headers render with react testing tutorial in6 the document', () => {
  render(<App />);
  const linkElement = screen.getByText(/This is React Testing Tutorial/i);
  expect(linkElement).toBeInTheDocument();
});

test('render Login components',()=>{
  const component = render(<App/>);
  const childElement = component.getByLabelText("Email");
  expect(childElement).toBeInTheDocument();
});