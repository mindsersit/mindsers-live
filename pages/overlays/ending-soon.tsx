import { useEffect, useState } from "react"

export default function StartingSoon() {
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
        <h1 style={{ fontSize: "4em", fontWeight: 900 }}>This is the end.</h1>
      </header>
    </main>
  )
}
