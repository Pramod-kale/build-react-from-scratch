import ReactDom from 'react-dom/client'
import React from 'react'

const App = () => {
    return (
        <div>this is react app</div>
    )
}


ReactDom.createRoot(document.getElementById('app')).render(<App />)