import classes from './App.module.css';
import MyModal from './Components/MyModal';

function App() {
    return (
        <div className={classes.appContainer}>
            <div className={classes.componentsContainer}>
                <MyModal />
            </div>
        </div>
    );
}

export default App;
