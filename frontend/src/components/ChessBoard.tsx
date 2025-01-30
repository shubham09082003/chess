import { Color, PieceSymbol, Square } from "chess.js"
import { useState } from "react";
import { MOVE } from "../screens/Game";

export const ChessBoard = ( { board , socket , setBoard , chess } : {
    setBoard : any;
    chess : any;
    board : ({
        square : Square;
        type : PieceSymbol;
        color : Color;
    } | null)[][];
    socket : WebSocket;
}) => {

    const [from, setFrom] = useState<Square | null>(null);
    return (
        <div className="w-full">
            {board.map((row, i) => (
                    <div key={i} className="flex justify-center">
                    {row.map((square, j) => {
                        const squareRepresenation = String.fromCharCode(97 + (j % 8)) + "" + (8 - i) as Square;
                        return (
                            <div key={j} 
                        onClick={() => {
                            if(!from) {
                                setFrom(squareRepresenation);
                            }else{
                                socket.send(JSON.stringify({
                                    type : MOVE,
                                    payload : {
                                        move : {
                                            from,
                                            to : squareRepresenation
                                        }
                                    }
                                }));

                                chess.move({
                                    from,
                                    to : squareRepresenation
                                });
                                setBoard(chess.board());

                                setFrom(null)
                            }
                        }}
                        className={`w-16 h-16 ${(i+j)% 2 == 0 ? 'bg-green-500' : 'bg-white'}`}>
                            <div className="w-full justify-center flex h-full">
                                <div className="flex justify-center flex-col h-full">
                                    {square ? <img className="w-10" src={ `/${square?.color === 'b' ? square?.type : `${square?.type?.toUpperCase()} copy`}.png`}/> : null}
                                </div>
                            </div>
                        </div>
                        ) 
                    })}
                </div>
            ))}
        </div>
    )
}