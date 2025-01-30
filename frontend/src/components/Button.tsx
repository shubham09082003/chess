

export const Button = ({ onClick , children } : { onClick: () => void, children : React.ReactNode }) => {
    return (
        <button onClick={onClick} 
            className="text-2xl bg-green-500 hover:bg-green-900 text-white font-bold py-4 px-8 rounded w-50">
            {children} 
        </button>
    )
}