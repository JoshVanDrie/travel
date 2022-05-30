import React from "react"
import Card from "./components/Card"
import Navbar from "./components/Navbar"
import Data from './data'
import './style.css'

export default function App() {
    const cards = Data.map(item => {
        return <Card
            key={item.id}
            {...item}
            />
    })
return (
    <div>
        <section className="cards--list">
            {cards}
        </section>
    </div>
)
}
