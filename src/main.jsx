import { createRoot } from 'react-dom/client'
import { ProvideUser } from './context/userContext'
import { ProvideMovie } from './context/movieContext'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
import './index.css'
createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ProvideUser>
            <ProvideMovie>
                <App />
            </ProvideMovie>
        </ProvideUser>
    </BrowserRouter>
)
