import { FaFacebookF, FaYoutube, FaInstagram  } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="p-32 flex flex-col gap-24">
      <div className="flex">
        <div className="w-[880px] flex flex-col gap-10">
          <h2 className="text-6xl font-title">Vamos trabalhar juntos? <br /> Entre em contato!</h2>
          <p className="text-xl font-text text-gray">
            Inspirado pelo nosso trabalho?
            <br />
            Teremos o maior prazer em ajudar você a <br /> criar o interior dos seus
            sonhos!
          </p>
        </div>
        <div className="w-96 flex flex-col gap-12">
          <p className="text-xl font-text">
            Rua Das Nogueiras, 2099
            <br />
            Jardim dos Poetas
            <br />
            São Paulo 055262
          </p>
          <div className="flex gap-2 font-title text-3xl text-greenlight">
          <p>Tel.:</p>
          <p className="cursor-pointer hover:text-black transition duration-300">+55 (11) 98765-4321 </p>
          </div>
          <p className="text-xl text-gray cursor-pointer hover:text-black">peonic@gmail.com</p>
          <div className="flex gap-6">
            <FaFacebookF className="h-6 w-6 cursor-pointer hover:text-greenlight" />
            <FaYoutube className="h-6 w-6 cursor-pointer hover:text-greenlight" />
            <FaInstagram className="h-6 w-6 cursor-pointer hover:text-greenlight" />
          </div>
        </div>
      </div>
      <div className="text-sm font-text text-gray flex gap-20">
        <div className="flex gap-1">
             <p className="text-greenlight cursor-pointer hover:text-orange">Zemez</p>
             <p>©. Todos os direitos reservados.</p>
        </div>
        <div className="flex gap-6">
            <p className="cursor-pointer hover:text-greenlight">Termos & Condições</p>
            <p className="cursor-pointer hover:text-greenlight">Politica de Privacidade</p>
        </div>
      </div>
    </footer>
  );
}
