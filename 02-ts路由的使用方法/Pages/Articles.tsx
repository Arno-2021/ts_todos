import React from 'react'
import { useParams } from 'react-router-dom'

export default function Articles() {
    const params = useParams<{ id: string }>()
    return <div>文章页---{params.id}</div>
}
