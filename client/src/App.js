import {React} from 'react'
import {Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import { BunniesContainer, Login, AppForm, NavBar } from './components/index.js'
import './index.css'



const App = () => {
    
    return (
		<AppStyles>
            <NavBar />
			<Routes>
                <Route path="/" element={<BunniesContainer isAdmin={false}/>} />

				<Route path="login" 
                    element={<Login/>}
                />
                    
				<Route path="apply" element={<AppForm />} />
                
			</Routes>
		</AppStyles>
    );
}

const AppStyles = styled.div`
    background-color: #e9ebee;
    min-height: 100vh;
	min-width: 100vw;
    display: flex;

    .showFormButton {
        width: 50%;
        font-size: 2rem;
        align-self: flex-start;
    }  
    .container {
        width: 100vw;
        margin: 5rem auto;
        border: 2px solid white;
    }  
    
`
export default App;
