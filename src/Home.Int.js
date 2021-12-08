import 'react-native';
import React from 'react';
import Home from './Home';

import {render} from '@testing-library/react-native';

it('renders correctly', () => {
    const testParams = {navigation: { navigate: () => {} }};
    const rendered = render(<Home navigation={testParams} />);
    rendered.getByText('Proposition Stand');
    rendered.getByText('Opposition Stand');
    rendered.getByText('Motion');
});