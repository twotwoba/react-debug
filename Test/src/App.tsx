import { useEffect, useState } from 'react'
const App = () => {
    const [count, setCount] = useState(1)
    useEffect(() => {
        return () => {
            console.log('🔥 --->', 2222)
        }
    }, [])
    return (
        <div className="flex flex-col justify-center items-center w-full h-full bg-sky-100">
            <p className="px-6 text-2xl text-gray-600 md:!text-4xl">{"Let's do it "}🔨</p>
            {count}
            <button onClick={() => setCount(pre => pre + 1)}> 点击加 1 </button>
        </div>
    )
}

export default App
