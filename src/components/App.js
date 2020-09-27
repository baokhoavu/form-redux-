import React from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import UndoRedo from "../containers/UndoRedo";

import styled from "styled-components";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
// import StepCon from "./components/StepCon.js";

const Green = styled.div`
    background: rgba(0, 177, 106, 1);
    min-height: 40px;
    line-height: 2.5;
    color: #fff;
    font-weight: bold;
    font-size: 20px;
`;

const AppBox = styled.div``;

// const App = () => (
//     <div>
//         <AddTodo />
//         <VisibleTodoList />
//         <Footer />
//         <UndoRedo />
//     </div>
// );

function App() {
    return (
        <AppBox>
            <Green>Bad Credit and Stated Income Programs Available.</Green>
            <div className="container">
                {/* <AddTodo />
                <VisibleTodoList />
                <UndoRedo /> */}
                <BrowserRouter basename={"/"}>
                    <Switch>
                        <Route path="/" component={Home} exact />
                        {/* <Route path="/steps" component={StepCon} exact /> */}

                        {/* <Route path="/steps" component={Step1} exact />
                            <Route path="/step2" component={Step2} exact />
                            <Route path="/step3" component={Step3} />
                            <Route path="/step4" component={Step4} /> */}

                        <Route component={Error} />
                    </Switch>
                </BrowserRouter>
                <Footer />
            </div>
        </AppBox>
    );
}

export default App;
