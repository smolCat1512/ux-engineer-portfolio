import Footer from "@/components/footer";
import "../app/globals.css";
import Header from "@/components/header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-900 text-white">
        <Header />
        <main className="flex-1 p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
