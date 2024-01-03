import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import EarthCanvas from "./canvas/Earth";
import { TypeAnimation } from 'react-type-animation';
import { heroTypeAnimation } from "../constants";

const Hero = () => {
  return (
    <section className='flex justify-center h-screen bg-[#f9f9f9]'>

      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center w-[80%] max-w-screen-2xl h-full">
        <div className="-mt-[80px] lg:mt-0">
          <h1 className="flex justify-center font-bold font-poppins text-3xl md:text-4xl 2xl:text-5xl 2xl:py-1">
            Hello, I'm Trevin.
          </h1>
          <div className="flex justify-center lg:justify-start">
            <TypeAnimation
                  sequence={ heroTypeAnimation }
                  speed={3}
                  repeat={Infinity}
                  className="absolute font-poppins font-bold text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl"
                />
          </div>
          <h3 className="flex justify-center lg:justify-start text-3xl mt-[50px] 2xl:mt-[70px]">
            <a href="https://linkedin.com/in/trevinlee"
               className="hover:scale-105">
              <FaLinkedin/>
            </a>
            <a href="https://github.com/CRXKXWYI49"
               className="hover:scale-105">
              <FaGithubSquare/>
            </a>
          </h3>
        </div>

        <div className="w-[300px] h-1/2 2xl:w-5/12 2xl:h-3/4 -order-1 lg:order-2">
          <EarthCanvas/>
        </div>
      </div>

    </section>
  )
}


export default Hero