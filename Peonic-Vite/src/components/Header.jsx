import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

export default function Header() {
    
    return (

        <header className='w-full flex justify-around bg-green pt-4 pb-4'>
            <div className="cursor-pointer w-[44%]">
                <Link to="/">
                    <img src={logo} alt="logo-peonic" />
                </Link>
            </div>
            <nav className="flex justify-between items-center w-[25%]">
                <li className="list-none text-lg font-text text-white cursor-pointer hover:text-orange transition duration-300"><Link to="/servicosPage">Serviços</Link></li>
                <li className="list-none text-lg font-text text-white cursor-pointer hover:text-orange transition duration-300">Sobre</li>
                <li className="list-none text-lg font-text text-white cursor-pointer hover:text-orange transition duration-300">Portfolio</li>
                <li className="list-none text-lg font-text text-white cursor-pointer hover:text-orange transition duration-300">Contato</li>
            </nav>
        </header>

    )

}
