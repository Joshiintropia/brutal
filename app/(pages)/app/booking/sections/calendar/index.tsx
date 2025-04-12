"use client";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import ButtonSecondary from "../../../components/buttonSecondary";

interface ClassInfo {
  name: string;
  instructor: string;
  time: string;
}

interface DaySchedule {
  [timeSlot: string]: ClassInfo;
}

interface WeekSchedule {
  [day: string]: DaySchedule;
}

interface DayInfo {
  day: string;
  date: Date;
  formattedDay: string;
}

const generateTimeSlots = (startTime = 10, endTime = 14): string[] => {
  const slots = [];
  for (let hour = startTime; hour <= endTime; hour++) {
    slots.push(`${hour % 12 || 12} ${hour < 12 ? "AM" : "PM"}`);
  }
  return slots;
};

const generateWeekDays = (startDate: Date = new Date()): DayInfo[] => {
  const days = [];
  const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  for (let i = 0; i < 5; i++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);
    days.push({
      day: `${dayNames[date.getDay()]} ${date.getDate()}`,
      formattedDay: `${dayNames[date.getDay()]} ${date.getDate()}`,
      date: date,
    });
  }
  return days;
};

const Index = () => {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [formattedClasses, setFormattedClasses] = useState<WeekSchedule>({});
  const [timeSlots] = useState(() => generateTimeSlots());
  const [weekDays] = useState(() => generateWeekDays());

  // Example data - moved inside component but outside of render
  const classes: WeekSchedule = {
    "WED 8": {
      "10 AM": {
        name: "SPINNING",
        instructor: "Rodrigo",
        time: "10:00 - 10:45",
      },
      "11 AM": {
        name: "SPINNING",
        instructor: "Rodrigo",
        time: "11:00 - 11:45",
      },
      "12 PM": {
        name: "SPINNING",
        instructor: "Rodrigo",
        time: "12:00 - 12:45",
      },
      "1 PM": {
        name: "SPINNING",
        instructor: "Rodrigo",
        time: "13:00 - 13:45",
      },
      "2 PM": {
        name: "SPINNING",
        instructor: "Rodrigo",
        time: "14:00 - 14:45",
      },
    },
    "THU 9": {
      "10 AM": {
        name: "SPINNING",
        instructor: "Rodrigo",
        time: "10:00 - 10:45",
      },
      "11 AM": {
        name: "SPINNING",
        instructor: "Rodrigo",
        time: "11:00 - 11:45",
      },
      "12 PM": {
        name: "SPINNING",
        instructor: "Rodrigo",
        time: "12:00 - 12:45",
      },
      "1 PM": {
        name: "SPINNING",
        instructor: "Rodrigo",
        time: "13:00 - 13:45",
      },
      "2 PM": {
        name: "SPINNING",
        instructor: "Rodrigo",
        time: "14:00 - 14:45",
      },
    },
    "FRI 10": {
      "10 AM": {
        name: "SPINNING",
        instructor: "Rodrigo",
        time: "10:00 - 10:45",
      },
      "11 AM": {
        name: "SPINNING",
        instructor: "Rodrigo",
        time: "11:00 - 11:45",
      },
      "12 PM": {
        name: "SPINNING",
        instructor: "Rodrigo",
        time: "12:00 - 12:45",
      },
      "1 PM": {
        name: "SPINNING",
        instructor: "Rodrigo",
        time: "13:00 - 13:45",
      },
      "2 PM": {
        name: "SPINNING",
        instructor: "Rodrigo",
        time: "14:00 - 14:45",
      },
    },
    "SAT 11": {
      "10 AM": {
        name: "SPINNING",
        instructor: "Rodrigo",
        time: "10:00 - 10:45",
      },
      "11 AM": {
        name: "SPINNING",
        instructor: "Rodrigo",
        time: "11:00 - 11:45",
      },
      "12 PM": {
        name: "SPINNING",
        instructor: "Rodrigo",
        time: "12:00 - 12:45",
      },
      "1 PM": {
        name: "SPINNING",
        instructor: "Rodrigo",
        time: "13:00 - 13:45",
      },
      "2 PM": {
        name: "SPINNING",
        instructor: "Rodrigo",
        time: "14:00 - 14:45",
      },
    },
    "SUN 12": {
      "10 AM": {
        name: "SPINNING",
        instructor: "Rodrigo",
        time: "10:00 - 10:45",
      },
      "11 AM": {
        name: "SPINNING",
        instructor: "Rodrigo",
        time: "11:00 - 11:45",
      },
      "12 PM": {
        name: "SPINNING",
        instructor: "Rodrigo",
        time: "12:00 - 12:45",
      },
      "1 PM": {
        name: "SPINNING",
        instructor: "Rodrigo",
        time: "13:00 - 13:45",
      },
      "2 PM": {
        name: "SPINNING",
        instructor: "Rodrigo",
        time: "14:00 - 14:45",
      },
    },
  };

  useEffect(() => {
    const formatted: WeekSchedule = {};
    weekDays.forEach(({ formattedDay }) => {
      if (classes[formattedDay]) {
        formatted[formattedDay] = classes[formattedDay];
      }
    });
    setFormattedClasses(formatted);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Only run once on mount

  const handleSlotSelection = (day: string, timeSlot: string): void => {
    setSelectedSlot(`${day}-${timeSlot}`);
  };

  return (
    <div className={styles.calendarWrapper}>
      <div className={styles.calendarContainer}>
        {/* Time Column */}
        <div className={styles.timeColumn}>
          <div className={styles.emptyHeader} />
          {timeSlots.map((time) => (
            <div key={time} className={styles.timeSlot}>
              {time}
            </div>
          ))}
        </div>

        {/* Days Columns */}
        {weekDays.map(({ day, formattedDay }) => (
          <div key={day} className={styles.dayColumn}>
            <div className={styles.dayHeader}>{day}</div>
            {timeSlots.map((timeSlot) => {
              const classInfo = formattedClasses[formattedDay]?.[timeSlot];
              const slotId = `${formattedDay}-${timeSlot}`;

              return classInfo ? (
                <div
                  key={slotId}
                  onClick={() => handleSlotSelection(formattedDay, timeSlot)}
                  className={`${styles.classCard} ${
                    selectedSlot === slotId ? styles.selected : ""
                  }`}
                >
                  <span className={styles.className}>{classInfo.name}</span>
                  <span className={styles.instructor}>
                    {classInfo.instructor}
                  </span>
                  <span className={styles.hours}>{classInfo.time}</span>
                </div>
              ) : (
                <div key={slotId} className={styles.emptySlot} />
              );
            })}
          </div>
        ))}
      </div>
      <div className={styles.buttonContainer}>
        <ButtonSecondary>RESERVE A CLASS</ButtonSecondary>
      </div>
    </div>
  );
};

export default Index;