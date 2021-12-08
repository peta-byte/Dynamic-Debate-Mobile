import 'react-native';
import React from 'react';
import Debate from './Debate';

import {render} from '@testing-library/react-native';

it('renders correctly', () => {
    const testParams = {params: { proposition: 'test', opposition: 'test', motion: 'test'}};
    const rendered = render(<Debate route={testParams} />);
    rendered.getByText(testParams.params.motion);
    rendered.getByText(testParams.params.opposition);
    rendered.getByText(testParams.params.proposition);
});