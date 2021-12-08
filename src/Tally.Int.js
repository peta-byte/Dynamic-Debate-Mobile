import 'react-native';
import React from 'react';
import Tally from './Tally';

import {render} from '@testing-library/react-native';

it('renders correctly', () => {
    const rendered = render(<Tally />);
    rendered.getByText('Proposition Tally');
    rendered.getByText('Opposition Tally');
});