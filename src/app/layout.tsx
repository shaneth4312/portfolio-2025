import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Senior Digital Consultant | Web Developer & DevOps Engineer',
  description: 'Senior Digital Consultant, Web Developer and DevOps Engineer with over 10 years of experience building scalable web applications and digital solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-dark text-white">
        {children}
      </body>
    </html>
  )
} 