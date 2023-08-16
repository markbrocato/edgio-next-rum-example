import Script from "next/script";

export default function Rum() {
  return (
    <>
      <Script defer>
        {`
      function initEdgioRum() {
        new Edgio.Metrics({
          token: '9bb470e4-a237-4d33-a3d8-6d4f87ed30c8'
        }).collect()
      }`}
      </Script>
      <Script
        src="https://rum.edgio.net/latest.js"
        defer
        onload="initEdgioRum()"
      />
    </>
  );
}
