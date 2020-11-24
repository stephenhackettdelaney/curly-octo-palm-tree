import moment from 'moment'

const shiftDuration = (opening, closing) => {

  const open = moment(opening, 'HH:mm:ss a')
  const close = moment(closing, 'HH:mm:ss a')

  const duration = moment.duration(close.diff(open))

  return parseInt(duration.asHours())
}

export const createRoster = (daysPerWeek, employees) => {

      const currentWeek = daysPerWeek.map(day => {
        const { staff_needed, opening_hours, closing_hours} = day

        const hours = shiftDuration(opening_hours, closing_hours)
        const staff = employees.reduce((acc, curr) => {

          const { hours_thisWeek, max_hours } = curr
          const notMaxHours = hours_thisWeek < max_hours
          const notStaffMax = acc.length < staff_needed 

            if(notMaxHours && notStaffMax){
              curr.hours_thisWeek = curr.hours_thisWeek + hours
              curr.days_thisWeek = [ ...curr.days_thisWeek, day.day ]
              
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