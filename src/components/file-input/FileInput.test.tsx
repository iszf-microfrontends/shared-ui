import { render, screen } from 'test-utils';

import { FileInput } from './FileInput';

describe('fileInput', () => {
  it('renders with label and input', () => {
    render(<FileInput label="Input label" placeholder="Input placeholder" />);
    expect(screen.getByText(/Input label/)).toBeInTheDocument();
    expect(screen.getByText(/Input placeholder/)).toBeInTheDocument();
  });
});
