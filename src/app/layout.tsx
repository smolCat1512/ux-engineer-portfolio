import "../app/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-900 text-white">
        <header className="bg-gray-800 p-4">Header</header>
        <main className="flex-1 p-4">{children}</main>
        <footer className="bg-gray-800 p-4">Footer</footer>
      </body>
    </html>
  );
}
