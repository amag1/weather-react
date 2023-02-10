import React from 'react'
import { Button } from 'semantic-ui-react'
import './style.global.css';

export default function ButtonController({names, handler}){

    return <div className="buttonStrip">
        {names.map((name, index) => {
            return <Button content={name} key={index} value={index} onClick={() => handler(index)}></Button>
        })}
    </div>
}