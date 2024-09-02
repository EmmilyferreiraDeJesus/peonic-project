import logo from '../assets/logo.svg';

export default function Header() {
    
    return (

        <header className='w-full flex justify-around bg-green pt-4 pb-4'>
            <div className="cursor-pointer w-[44%]">
                <img src={logo} alt="logo-plant" />
            </div>
            <nav className="flex justify-between items-center w-[25%]">
                <li className="list-none text-lg font-text text-white cursor-pointer hover:text-orange">Serviços</li>
                <li className="list-none text-lg font-text text-white cursor-pointer hover:text-orange">Sobre</li>
                <li className="list-none text-lg font-text text-white cursor-pointer hover:text-orange">Portfolio</li>
                <li className="list-none text-lg font-text text-white cursor-pointer hover:text-orange">Contato</li>
            </nav>
        </header>

    )

}
