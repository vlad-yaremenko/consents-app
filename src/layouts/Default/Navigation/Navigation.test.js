import { render } from '@testing-library/react';
import Nav from './index';
import { BrowserRouter as Router } from 'react-router-dom';

test('should render navigation items', () => {
  const { getByText } = render(<Router><Nav /></Router>);

  [{
    text: 'Give consent',
    url: '/give-consent'
  }, {
    text: 'Collected consents',
    url: '/consents'
  }].forEach(i => {
    expect(getByText(i.text)).toBeInTheDocument();
    expect(getByText(i.text)).toHaveAttribute('href', i.url);
  });
});
