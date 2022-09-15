import {React} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import styled from 'styled-components'
import { BunniesContainer, Login, AppForm } from './components/index.js'
import { AppProvider } from './context/appContext';

function App() {
    
    return (
        <BrowserRouter>
            <AppProvider>
                <Routes>
                    <Route path="/" element={<BunniesContainer />} />
                    <Route path="login" element={<Login />} />
                    <Route path="application" element={<AppForm />} />
                </Routes>
            </AppProvider>
        </BrowserRouter>
    );
}

const AppStyles = styled.div`
    background-color: #e9ebee;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    min-height: 100vh;
    display: flex;

    .showFormButton {
        width: 50%;
        font-size: 2rem;
        align-self: flex-start;
        margin-top: 3rem;
    }  
    .container {
        width: 100%;
        margin: 0px auto;
        border: 2px solid white;
    }  
    
`
export default App;
