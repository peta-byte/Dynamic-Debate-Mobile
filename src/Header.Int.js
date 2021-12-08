import 'react-native';
import React from 'react';
import Header from './Header';

import {render} from '@testing-library/react-native';

it('renders correctly', () => {
    const rendered = render(<Header />);
    rendered.getByText('Dynamic Debate');
});