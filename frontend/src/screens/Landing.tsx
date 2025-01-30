import { useNavigate } from "react-router-dom"
import { Button } from "../components/Button";

export const Landing = () => {
    const router = useNavigate();
    return(
        <div className="flex justify-center items-center h-screen">   
            <div className="pt-8 max-w-screen-xlg">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="flex justify-center"> 
                        <img src={"/chess.jpeg"}
                        className="max-w-96"/>
                    </div>
                    <div className="pt-16">
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="text-4xl font-bold text-white">Play Chess online on the #3 Site!</h1>
                        </div>

                        <div className="mt-4 flex flex-col justify-center items-center">
                            <Button onClick={() => router('/game')}>
                                Play Online 
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}   