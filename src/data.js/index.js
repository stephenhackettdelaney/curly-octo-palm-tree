const daysPerWeek = [
    {
      day: 'Monday',
      employees: ['This is a test'],
      opening_hours: '9:00',
      closing_hours: '17:00',
      staff_needed: 2,
    },
    {
      day: 'Tuesday',
      opening_hours: '9:00',
      closing_hours: '17:00',
      staff_needed: 2,
    },
    {
      day: 'Wednesday',
      opening_hours: '9:00',
      closing_hours: '17:00',
      staff_needed: 2,
    },
    {
      day: 'Thursday',
      opening_hours: '9:00',
      closing_hours: '17:00',
      staff_needed: 3,
    },
    {
      day: 'Friday',
      opening_hours: '9:00',
      closing_hours: '17:00',
      staff_needed: 6,
    },
  ]

  const employees = [
    {
      name: 'Stephen',
      type: 'full-time',
      max_hours: 40,
      hours_thisWeek: null,
    },
    {
      name: 'Rebecca',
      type: 'full-time',
      max_hours: 40,
      hours_thisWeek: null,
    },
    {
      name: 'Matthew',
      type: 'full-time',
      max_hours: 40,
      hours_thisWeek: null,
    },
    {
      name: 'Ben',
      type: 'full-time',
      max_hours: 40,
      hours_thisWeek: null,
    },
    {
      name: 'Derek',
      type: 'full-time',
      max_hours: 40,
      hours_thisWeek: null,
    },
    {
      name: 'Granny',
      type: 'full-time',
      max_hours: 40,
      hours_thisWeek: null,
    },
    {
      name: 'Dad',
      type: 'full-time',
      max_hours: 40,
      hours_thisWeek: null,
    },
    {
      name: 'Mum',
      type: 'full-time',
      max_hours: 40,
      hours_thisWeek: null,
    }
  ]

  const randomIndex = (employees, staffLimit) => {
    let random
    random = Math.floor(Math.random() * (employees.length - staffLimit + 1))
    if(random < 0){
      random = 0
    }

    return random
  }

export const createRoster = () => {

      const currentWeek = daysPerWeek.map(day => {
        const { staff_needed } = day

        const number = randomIndex(employees, staff_needed)

        const staff = employees.reduce((acc, curr, index ) => {
          if((index >= number) && (index < (number + staff_needed))){
             return [ ...acc, curr ] 
          }

          return acc

        }, [])

        const roster = {
          ...day,
          employees: staff
        }
        
        return roster
      })
    
      return currentWeek
    }