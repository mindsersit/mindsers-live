import { useEffect, useState } from "react"

export default function StartingSoon() {
  const target = new Date('2022/03/28 10:48')
  const [now, setNowDate] = useState(new Date())

  const milliseconds = target.getTime() - now.getTime()
  const seconds = Math.trunc(milliseconds / 1000)
  const minutes = Math.trunc(seconds / 60)
  const hours = Math.trunc(minutes / 60)
  const days = Math.trunc(hours / 24)

  useEffect(() => {
    const timerID = setInterval(() => setNowDate(new Date()), 1000)
    return () => clearInterval(timerID)
  })

  const rtf1 = new Intl.RelativeTimeFormat("en", { style: "long" })

  return (
    <main
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "white"
      }}
    >
      <header>
        <h1 style={{ fontSize: "4em", fontWeight: 900 }}>Starting Soon!</h1>
      </header>
      {days > 0 && <section>{rtf1.format(days, 'day')}</section>}
      {hours > 0 && <section>{rtf1.format(hours, 'hour')}</section>}
      {minutes > 0 && <section>{rtf1.format(minutes, 'minute')}</section>}
      <section>{rtf1.format(seconds, 'second')}</section>
    </main>
  )
}
