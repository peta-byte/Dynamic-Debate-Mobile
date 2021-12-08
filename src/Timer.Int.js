import 'react-native';
import React from 'react';
import Timer from './Timer';

import {render} from '@testing-library/react-native';

it('renders correctly', () => {
    const rendered = render(<Timer />);
    rendered.getByText('Timer');
});