import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button } from '../Button/Button'
import { BsFillMoonFill, BsMoon } from "react-icons/bs";
export const Theme = () => {
    const dispatch = useDispatch()
    const [theme, setTheme] = useState('theme1')
    const newTheme = () => {
        setTheme(theme === 'theme1' ? 'theme2' : 'theme1')
    }
    useEffect(() => {
        const backgroundColor = `var(--background-color-${theme})`
        const btn2backgroundcolor = `var(--btn2-background-color-${theme})`
        const btnbackgroundcolor = `var(--btn-background-color-${theme})`
        const textColor = `var(--text-color-${theme})`
        const divNone = `var(--div-none-${theme})`
        const textareaBackground = `var(--background-color-textarea-${theme})`
        const todoListcolor = `var(--todoList-color-${theme})`

        document.body.style.setProperty('--todoList-color', todoListcolor)
        document.body.style.setProperty('--background-color-textarea', textareaBackground)
        document.body.style.setProperty('--div-none', divNone)
        document.body.style.setProperty('--text-color', textColor)
        document.body.style.setProperty('--btn-background-color', btnbackgroundcolor)
        document.body.style.setProperty('--btn2-background-color', btn2backgroundcolor)
        document.body.style.setProperty('--background-color', backgroundColor)
    }, [theme])

    return (
        <div className='btnTheme'>
            <Button className={'btntheme'} name={theme === 'theme1' ?
                <BsFillMoonFill className='No-moon' /> :
                <BsMoon className='Moon' />}
                onClick={() => dispatch(newTheme())} />
        </div>
    )
}
