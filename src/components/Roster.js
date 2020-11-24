import React from 'react'

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

const ListHeader = ({ day, opening, closing, index = 0 }) => {
    return (
        <div style={{background: COLORS[index % COLORS.length], padding: '12px', borderRadius: '4px'}}>
            <div style={{fontSize: '30px', fontWeight: 600, color: 'white'}}>{day}</div>
            <div style={{display: 'flex'}}>
                <div style={{fontSize: '20px', fontWeight: 200, marginTop: '6px', color: 'white'}}>{`${opening} - ${closing}`}</div>
            </div>
        </div>
    )
}

const ListStaff = (({ employees }) => {

    const list = employees && employees.map(({ name }) => {
        return (
            <li style={{fontWeight: 200, fontSize: '28px', marginTop: '6px'}}>
                {name}
            </li>
        )
    })

    return (
        <ul style={{ listStyle: 'none', padding: '0 0 0 8px' }}>
          {list}
        </ul>
    )
    
})


const Total = ({ peeps }) => {
    // Would prob like to use REACT TABLE for this
    console.log('peeps: ', peeps)
    const hoursList = peeps.map(person => {
        const { name, hours_thisWeek, days_thisWeek} = person
        const isNull = hours_thisWeek === null

        return (
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', border: '2px solid red', gridGap: '12px'  }}>
                <h2>{`${name}`}</h2>
                {isNull ? <h2>{`0`}</h2> : <h2>{`${hours_thisWeek} hrs`}</h2> }
                {isNull ? <h2>{`none`}</h2> : <h2 style={{marginRight: '6px'}}>{`${days_thisWeek} (${days_thisWeek.length})`}</h2> }
            </div>
        )
    })


    return (
        <>
            <h1>Total Hours</h1>
            {hoursList}
        </>
    )
}

const Roster = ({ ros, people }) => {  
    console.log('people: ', people)
    return (
        <div style={{display: 'grid', gridTemplateColumns: '1fr', padding: '16px'}}>
            {ros.map(({ day, opening_hours, closing_hours, employees }, index) => {
                return (
                    <>
                        <ListHeader 
                            key={day}
                            day={day}
                            opening={opening_hours}
                            closing={closing_hours}
                            index={index + 1}
                        />
                        <ListStaff 
                            employees={employees}
                            key={employees.name}
                        />
                    </>
                )
            })}
            <Total peeps={people} />
        </div>
    )
}

export default Roster