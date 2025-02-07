import "../app/globals.css";
import Header from "@/components/header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-900 text-white">
        <Header />
        <main className="flex-1 p-4">{children}</main>
        <footer className="bg-gray-800 p-4">Footer</footer>
      </body>
    </html>
  );
}
