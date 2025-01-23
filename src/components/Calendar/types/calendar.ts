export type CalendarDate = {
    date: Date
    isCurrentMonth: boolean
    isSelected: boolean
    status: "free" | "occupied" | "disabled"
  }
  
  