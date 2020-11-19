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
      name: 'Ella',
      type: 'full-time',
      max_hours: 40,
      hours_thisWeek: null,
    },
    {
      name: 'Charlie',
      type: 'full-time',
      max_hours: 40,
      hours_thisWeek: null,
    },
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
    random = Math.floor(Math.random() * (employees.length - staffLimit))
    if(random < 0){
      random = 0
    }

    return random
  }


  const loop = (number, staffNeeded, employees) => {
    console.log('Starting loop')

    var staff = []
    var i = number
    console.log('i ', i)
    var initNum = number

    do {
      console.log('I in DO: ', i)
      console.log('with staffNeeded: ', i + staffNeeded)
      console.log('STAFF NEEDED: ', staffNeeded)
      console.log('DOING STUFF')
      staff.push(employees[i])
      i++
    }
    while(i < initNum + staffNeeded)

    return staff
  }



export const createRoster = () => {
      const currentWeek = daysPerWeek.map((day, index) => {

        const number = randomIndex(employees, day.staff_needed)

        const staff = loop(number, day.staff_needed, employees)

        // const staff = employees.filter((employee, i) => {
        //   // console.log('Start')
        //   if(i === number){
        //     // console.log('NUM is true')
        //     // if(i <= i + day.staff_needed){
        //       // console.log('Employees: ', employee)
        //       return employee
        //     // }
        //   }
        // })

        const roster = {
          ...day,
          employees: [...staff]
        }
        
        return roster
      })
    
      return currentWeek
    }