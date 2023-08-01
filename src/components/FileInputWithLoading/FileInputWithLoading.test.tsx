import { mantineRender } from '~/utils';

import { FileInputWithLoading } from './FileInputWithLoading';

describe('FileInputWithLoading', () => {
  it('renders without errors', () => {
    const { container } = mantineRender(<FileInputWithLoading />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
