import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
type ListType = {
    id: number
    name: string
}[]
function App() {
    const pRef = useRef<HTMLParagraphElement>(null)
    console.log(pRef.current?.innerHTML)

    const [num, setNum] = useState(0)
    const [list, setList] = useState<ListType>([])
    const changeNum = (e: React.ChangeEvent<HTMLInputElement>) =>
        setNum(Number(e.target.value))
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios('http://toutiao.itheima.net/v1_0/channels')
            setList(res.data.data.channels)
        }
        fetchData()
    }, [])
    return (
        <div className='App'>
            <p ref={pRef}>当前数量{num}</p>
            <input type='text' onChange={changeNum} />
            <ul>
                {list.map(item => (
                    <li>
                        {item.id}--{item.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default App
