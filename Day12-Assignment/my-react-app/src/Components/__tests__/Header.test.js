import {render} from "@testing-library/react"
import HeaderComponent from "../HeaderComponent";
import {Provider} from "react-redux";
import store from "../store"
import {StaticRouter} from "react-router-dom/server";



test("testing header",()=>{

   const header =  render(
   <StaticRouter>
   <Provider store={store}>
    <HeaderComponent />
    </Provider>
    </StaticRouter>
    )

    const logo = header.getByTestId("logo")
    console.log(logo)
    //expect(logo.elementType).toBe("logoTitle")
})


/* import {sum} from '../sum'


test("testing sum of two number",()=>{
     expect (sum(2,3)).toBe(5);
         
}); */