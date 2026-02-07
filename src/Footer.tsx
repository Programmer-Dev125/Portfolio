import { RippleButton } from "../components/custom";
import { goLink } from "../data/uiData";

export default function Footer(){
    return(
        <div className="border-t border-[var(--bd)]">
            <div className="w-[80%] sm:w-[50%] lg:w-[30%]">
                <div className="grid grid-cols-[6fr_1.5fr_1.5fr]">
                    <p className="border-r border-[var(--bd)] text-sm text-[var(--lk)] pl-5 py-5">Find Me In:</p>
                    <RippleButton
                        onClick={() => goLink("https://www.linkedin.com/in/abdul-ahad-dar-6146213a8/")}
                        className="text-[var(--lk)] border-r border-[var(--bd)] font-semibold text-base py-5 text-center content-center hover:text-white"
                    >
                        in
                    </RippleButton>
                    <RippleButton
                        onClick={() => goLink("https://www.upwork.com/freelancers/~01d2adc5e24022f07e")}
                        className="text-[var(--lk)] border-r border-[var(--bd)] font-semibold text-base py-5 text-center content-center hover:text-white"
                    >
                        Up
                    </RippleButton>
                </div>
            </div>
        </div>
    )
}