import React from 'react'

export function App() {
    const [state, setState] = React.useState(0)
    return (
        <>
            <header>
                <h1>Level Up</h1>
            </header>
            <main>
                <h2>{state}</h2>
                <button onClick={() => setState(state + 1)}>Button</button>
            </main>
        </>
    )
}