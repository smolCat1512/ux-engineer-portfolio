import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gray-900 text-white">
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
