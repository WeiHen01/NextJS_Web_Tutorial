export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className = "App">
          {children}
        </div>
      </body>
    </html>
  )
}
