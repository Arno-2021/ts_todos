import React from 'react'
import { useLocation } from 'react-router-dom'
import { HistoryState } from '../types'

export default function Home() {
    const location = useLocation<HistoryState>()
    console.log(location)

    return <div>{location.state.demo}</div>
}
