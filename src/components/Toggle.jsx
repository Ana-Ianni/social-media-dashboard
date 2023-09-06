import { useState, useEffect } from 'react'

const Toggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const body = document.querySelector('body');
        if (darkMode) {
          body.classList.add('dark');
        } else {
          body.classList.remove('dark');
        }
    }, [darkMode]);

    const handleToggle = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className="toggle">
            <label htmlFor="checkbox" className="text-sm font-bold text-dark-grayish-blue cursor-pointer">Dark Mode</label>
            
            <input 
            type="checkbox"
            className="checkbox"
            id="checkbox" checked={darkMode} onChange={handleToggle}/>

            <label htmlFor="checkbox" className="m-0 w-[66px] sm:ml-2.5 sm:w-[50px] label">
                <div className="ball"></div>
            </label>
        </div>
    )
}

export default Toggle
