import { createRoot } from 'react-dom/client'
import { ProvideUser } from './context/userContext'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
import './index.css'
createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ProvideUser>
            <App />
        </ProvideUser>
    </BrowserRouter>
)
