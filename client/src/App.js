import BunnyForm from './components/BunnyForm';
import { useAppContext } from './context/appContext';
import styled from 'styled-components'
import BunniesContainer from './components/BunniesContainer';

function App() {
    const { showForm, formType, toggleShowForm, bunnyToEdit } = useAppContext();  
    return (
        <AppStyles className='App'>
        {showForm 
            ? <BunnyForm />
            :
            <div className='column container'>
                <button className='showFormButton' type='button' onClick={() => {toggleShowForm('add')}}>
                    add a bunny
                </button>
                <BunniesContainer />
            </div>
        } 
           
        </AppStyles>
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
