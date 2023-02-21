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
        flexDirection: "row",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <header>
          <h1 style={{ fontSize: "4em", fontWeight: 900 }}>Chat.</h1>
        </header>
        <section
          style={{
            height: 400,
            width: 500,
            borderWidth: 3,
            borderStyle: 'dashed',
          }}
        />
      </div>
      <div style={{ width: '40%'}} />
    </main>
  );
}
