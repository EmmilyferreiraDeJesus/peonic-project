import mulherNoJardim from "../assets/mulher-mexendo-grama-app.png";
import mulherComVasoJardim from "../assets/mulher-segurando-planta-app.png";
import VasoNoChaoJardim from "../assets/planta-no-chao-app.png";

export default function HomePage() {
  return (
    <div>
      <div className="bg-green h-[120dvh] relative">
        <img
          className="top-14 pl-[46%] absolute h-[80%]"
          src={mulherNoJardim}
          alt="mulher-mexendo-na-grama"
        />
        <img
          className="absolute h-[27%] end-0 top-[25%]"
          src={mulherComVasoJardim}
          alt="mulher-segurandoo-planta"
        />
        <img
          className="absolute h-[50%] left-[70%] top-[80%]"
          src={VasoNoChaoJardim}
          alt="planta-no-chao"
        />
        <div className="z-1 relative top-[15%] pl-[8%] flex flex-col gap-20 animate-fade-in-left animate-delay-300">
          <div className="w-[55%] text-8xl font-title text-white">
            <h1>Ecologização adequada e soluções inteligentes</h1>
          </div>
          <div className="flex flex-col gap-14">
            <div className="text-white w-[30%] text-xl font-text">
              <p>
                Crie designs de plantas incríveis para escritórios ou
                apartamentos.
              </p>
            </div>
            <div className="w-[20%] text-base font-text flex justify-between">
              <span className="cursor-pointer text-orange font-bold hover:text-greenlight">
                VER PORTFÓLIO
              </span>
              <span className="cursor-pointer text-white font-bold hover:text-greenlight">
                NOS CONTATE
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-32">
        
      </div>
    </div>
  );
}
