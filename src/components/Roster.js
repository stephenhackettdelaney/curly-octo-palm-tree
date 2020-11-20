import React from 'react'
import { createRoster } from '../data.js'

const COLORS = [
    '#0D1FBF',
    '#310DBF',
    '#660DBF',
    '#9B0DBF',
    '#BF0DAD',
    '#BF0D78',
    '#BF0D43',
    '#BF430D',
    '#BF780D',
    '#BFAD0D',
    '#9BBF0D',
    '#0DBF54',
    '#0DBF89',
    '#0DBFBF',
    '#0D89BF',
    '#0D54BF',
    'ROYALBLUE'
  ]


const ListHeader = ({day, opening, closing, index = 0}) => {
    return (
        <div style={{background: COLORS[index % COLORS.length], padding: '12px', borderRadius: '4px'}}>
            <div style={{fontSize: '30px', fontWeight: 600, color: 'white'}}>{day}</div>
            <div style={{display: 'flex'}}>
                <div style={{fontSize: '20px', fontWeight: 200, marginTop: '6px', color: 'white'}}>{`${opening} - ${closing}`}</div>
            </div>
        </div>
    )
}

const ListStaff = ({ employees }) => employees.map(({ name }) => <li style={{fontWeight: 200, fontSize: '28px', marginTop: '6px'}}>{name}</li>)


const results = createRoster()

const Roster = () => {  
    
    return (
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr', gridGap: '12px', padding: '16px'}}>
            {results.map(({ day, opening_hours, closing_hours, employees }, index) => {
                return (
                    <div key={day}>
                        <ListHeader 
                            day={day}
                            opening={opening_hours}
                            closing={closing_hours}
                            index={index + 1}
                        />
                        <ul key={day} style={{listStyle: 'none', padding: '0 0 0 8px' }}>
                            <ListStaff 
                                employees={employees}
                                key={employees.name}
                            />
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}

export default Roster