/**
 * @file:	index.tsx
 * @author:	Jacob Xie
 * @date:	2023/09/03 08:18:12 Sunday
 * @brief:
 **/


import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

const Home = () => {
    return (
        <div>
            <p style={{color: "black"}}>Hello</p>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
        </div>
    )
}

export default Home
