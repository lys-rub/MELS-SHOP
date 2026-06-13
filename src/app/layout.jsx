import '../app/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: "MEL'S Shop | Boutique de mode & beauté",
  description: "MEL'S Shop - une boutique en ligne professionnelle inspirée des meilleures plateformes e-commerce.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
