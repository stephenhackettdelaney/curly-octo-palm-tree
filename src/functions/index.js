

const randomIndex = (employees, staffLimit) => {
    let random
    random = Math.floor(Math.random() * (employees.length - staffLimit + 1))
    if(random < 0){
      random = 0
    }

    return random
  }

export const createRoster = (daysPerWeek, employees) => {

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