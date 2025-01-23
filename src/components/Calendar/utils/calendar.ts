export function getDaysInMonth(year: number, month: number): Date[] {
    const date = new Date(year, month, 1)
    const days: Date[] = []
  
    const firstDay = date.getDay() || 7
    for (let i = 1; i < firstDay; i++) {
      const prevDate = new Date(year, month, 1 - i)
      days.unshift(prevDate)
    }
  
    while (date.getMonth() === month) {
      days.push(new Date(date))
      date.setDate(date.getDate() + 1)
    }
  
    const lastDay = days[days.length - 1].getDay() || 7
    for (let i = 1; i <= 7 - lastDay; i++) {
      const nextDate = new Date(year, month + 1, i)
      days.push(nextDate)
    }
  
    return days
  }
  
  export function formatMonth(date: Date): string {
    return date.toLocaleString("default", { month: "long", year: "numeric" })
  }
  
  export function isBusyDate(date: Date, busyDates: Date[]): boolean {
    return busyDates.some(busyDate => 
      busyDate.getDate() === date.getDate() &&
      busyDate.getMonth() === date.getMonth() &&
      busyDate.getFullYear() === date.getFullYear()
    );
  }
  