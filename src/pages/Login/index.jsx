import './style.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LoginCard from '../../components/LoginCard';
// import { Link } from 'react-router-dom';

export function Login() {
    return (
        <div className="App">
            <div className='container'>
                <Navbar></Navbar>
                <LoginCard></LoginCard>
            </div>
            <Footer></Footer>
        </div>
    );
}
