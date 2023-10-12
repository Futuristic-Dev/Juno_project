import React, {Component} from "react";
import MyComp from "./components/Test";
import { createRoot } from "react-dom/cjs/react-dom.production.min";

class TestComp extends Component{
    render(){
        return(
            <div className="app">
                <h1>hello</h1>
                <div>
                    <p>
                        This is something that we should be mostly concerned about
                    </p>
                </div>
                <MyComp/>
            </div>
        )
    }
}

const container = document.getElementById('container');
const root = createRoot(container); 
root.render(<TestComp/>);