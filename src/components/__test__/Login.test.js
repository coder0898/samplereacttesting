import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login,{validateEmail} from "../Login";

describe("Testing the Login component",()=>{
    test("render the login form with 2 button ",async ()=>{
        render(<Login/>);
        const buttonList = await screen.findAllByRole("button");
        expect(buttonList).toHaveLength(2);
    });

    test("to check email validation", ()=>{
        const testEmail = "test@gmail.com";
        expect(validateEmail(testEmail)).toBe(true);
    });
    test("email input field should accept email ", () =>{
        render(<Login/>);
        const email =  screen.getByPlaceholderText("Enter emali");
        userEvent.type(email,"test@gmail.com");
        expect(email.value).toMatch("test@gmail.com")
    });
    test("password input should have type password", () =>{
        render(<Login/>);
        const password = screen.getByPlaceholderText("Password");
        expect(password).toHaveAttribute("type","password");
    });
});