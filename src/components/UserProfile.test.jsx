import {render} from "@testing-library/react";
import UserProfile from "../components/UserProfile";
import {describe,it,expect} from 'vitest';

describe('UserProfile Component',()=>{
    it('render correctly with hobbies',()=>{
        const userProps = {
            name: "John",
            age: 25,
            hobbies: ["Sports", "Cooking"],
        };
        const {asFragment} = render(<UserProfile {...userProps} />)
        expect(asFragment()).toMatchSnapshot();
    });

    it('render correctly without hobbies',() =>{
        const userProps = {
            name: "John",
            age: 25,
            hobbies: [],
        };
        const {asFragment} = render(<UserProfile {...userProps} />)
        expect(asFragment()).toMatchSnapshot();
    })
})
