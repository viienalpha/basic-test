"use client"

import type React from "react"
import { useState } from "react"
import type { CalendarDate } from "./types/calendar"
import { getDaysInMonth, formatMonth, isBusyDate } from "./utils/calendar"
import { ReactComponent as IconArrowRight } from "../../assets/icons/arrow-right.svg"

import "./style.scss"
import moment from "moment"

export default function Calendar() {
  const currentDate = new Date()
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [viewDate, setViewDate] = useState(new Date())

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  const months = Array.from({ length: 12 }, (_, i) => new Date(2000, i, 1))
  const years = Array.from({ length: 10 }, (_, i) => currentDate.getFullYear() + i)

  const busyDates = [
    new Date(2025, 0, 28), // 28/01/2025
    new Date(2025, 0, 29), // 29/01/2025
    new Date(2025, 1, 4), // 04/02/2025
  ]

  const calendarDays = getDaysInMonth(viewDate.getFullYear(), viewDate.getMonth()).map((date) => ({
    date,
    isCurrentMonth: date.getMonth() === viewDate.getMonth(),
    isSelected: selectedDate?.toDateString() === date.toDateString(),
    status: isBusyDate(date, busyDates) ? "occupied" : "free",
  }))

  const handlePreviousMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1))
  }

  const handleNextMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1))
  }

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setViewDate(new Date(viewDate.getFullYear(), Number.parseInt(event.target.value)))
  }

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setViewDate(new Date(Number.parseInt(event.target.value), viewDate.getMonth()))
  }

  const handleDateClick = (date: Date) => {
    setSelectedDate(date)
  }
  return (
    <div className="calendar-container">

      <div className="calendar-card">
        <div className="calendar-header">
          <button className="calendar-nav-button" onClick={handlePreviousMonth}>
          <IconArrowRight className=" rotate-180"/>
          </button>
          <span>{moment(viewDate).format("MMMM")} {viewDate.getFullYear()}</span>

          <button className="calendar-nav-button" onClick={handleNextMonth}>
            <IconArrowRight/>
          </button>
        </div>

        <div className="calendar-grid">
          {days.map((day) => (
            <div key={day} className="calendar-day-header">
              {day}
            </div>
          ))}

          {calendarDays.map((day, index) => (
            <button
              key={index}
              onClick={() => handleDateClick(day.date)}
              className={`calendar-day ${!day.isCurrentMonth ? "calendar-day-disabled" : ""} ${day.status === "free" ? "calendar-day-free" : "calendar-day-occupied"} ${day.isSelected ? "calendar-day-selected" : ""}`}
              disabled={!day.isCurrentMonth}
            >
              <span className="calendar-day-number">{day.date.getDate()}</span>
              {day.isCurrentMonth && (
                <span
                  className={`calendar-day-status ${day.status === "free" ? "calendar-day-status-free" : "calendar-day-status-occupied"}`}
                >
                  {day.status === "free" ? "Libre" : "Occupé"}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

