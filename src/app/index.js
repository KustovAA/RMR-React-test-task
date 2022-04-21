import { useEffect, useState } from "react"
import { Table } from "../components/Table"

export const App = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/api/users')
            .then((res) => res.json())
            .then(setData)
    }, [])

    return <Table data={data} />
}
