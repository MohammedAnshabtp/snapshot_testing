import {render} from '@testing-library/react';
import HomeWorld from '../../src/components/HomeWorld';
import {it,expect} from 'vitest';

it('render correctly',() =>{
    const{asFragment} = render(<HomeWorld name="World"/>);
    expect(asFragment()).toMatchSnapshot()
});