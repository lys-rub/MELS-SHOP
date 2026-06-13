import { useMemo, useState } from 'react'
import coverPhoto from '../assets/mels-background.jpeg'
import logo from '../assets/mels-logo.png'

const popularProducts = [
  {
    name: 'Robe satin elegante',
    category: 'Vêtements',
    price: 89000,
    popularity: 95,
    tag: 'Populaire',
    color: 'blue',
  },
  {
    name: 'Sac mini luxe',
    category: 'Accessoires',
    price: 55000,
    popularity: 91,
    tag: 'Best-seller',
    color: 'cream',
  },
  {
    name: 'Sandales dorees',
    category: 'Chaussures',
    price: 66000,
    popularity: 88,
    tag: 'Tendance',
    color: 'gold',
  },
  {
    name: 'Parfum signature MEL’S',
    category: 'Parfums',
    price: 72000,
    popularity: 97,
    tag: 'Premium',
    color: 'cream',
  },
  {
    name: 'Gloss hydratant',
    category: 'Cosmétiques',
    price: 26000,
    popularity: 82,
    tag: 'Nouveau',
    color: 'blue',
  },
]

const shopCategories = [
  'Tous',
  'Parfums',
  'Vêtements',
  'Chaussures',
  'Accessoires',
  'Cosmétiques',
]

const formatPrice = (price) => `${price.toLocaleString('fr-FR')} FC`

const newProducts = [
  'Ensemble chic deux pieces',
  'Chemise fluide premium',
  'Bijoux minimalistes',
]

const reviews = [
  {
    name: 'Grace M.',
    text: "Les articles sont beaux et la livraison etait rapide. J'ai adore le service.",
  },
  {
    name: 'Sarah K.',
    text: "MEL'S donne vraiment une impression de qualite. Les pieces sont bien choisies.",
  },
  {
    name: 'Deborah L.',
    text: 'Belle boutique, prix clairs et communication tres professionnelle.',
  },
]

function Home() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Tous')
  const [sortBy, setSortBy] = useState('popularite')

  const filteredProducts = useMemo(() => {
    return popularProducts
      .filter((product) => {
        const matchesCategory =
          selectedCategory === 'Tous' || product.category === selectedCategory
        const matchesSearch = product.name
          .toLowerCase()
          .includes(search.trim().toLowerCase())

        return matchesCategory && matchesSearch
      })
      .sort((firstProduct, secondProduct) => {
        if (sortBy === 'prix-croissant') {
          return firstProduct.price - secondProduct.price
        }

        if (sortBy === 'prix-decroissant') {
          return secondProduct.price - firstProduct.price
        }

        return secondProduct.popularity - firstProduct.popularity
      })
  }, [search, selectedCategory, sortBy])

  return (
    <main className="home-page">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="MEL'S accueil">
          <img src={logo} alt="MEL'S" />
        </a>

        <nav className="nav-links" aria-label="Navigation principale">
          <a href="#top">Accueil</a>
          <a href="#populaires">Boutique</a>
          <a href="#categories">Catégories</a>
          <a href="#apropos">À propos</a>
          <a href="#contact">Contact</a>
          <a href="#panier">Panier</a>
        </nav>

        <a className="header-action" href="#populaires">
          Voir la boutique
        </a>
      </header>

      <section className="hero-section" id="top">
        <div className="hero-content">
          <img className="hero-logo" src={logo} alt="MEL'S" />
          <p className="eyebrow">Mode, beauté et accessoires</p>
          <h1>MEL'S Boutique vous habille avec élégance.</h1>
          <p className="hero-copy">
            Retrouvez des vêtements, sacs, chaussures, bijoux et accessoires
            sélectionnés pour créer des looks modernes, chics et accessibles.
          </p>

          <div className="value-points" aria-label="Pourquoi acheter chez MEL'S">
            <span>Produits sélectionnés</span>
            <span>Prix en francs congolais</span>
            <span>Service client proche</span>
          </div>

          <div className="hero-actions">
            <a className="primary-button" href="#populaires">
              Decouvrir les produits
            </a>
            <a className="secondary-button" href="#promotions">
              Voir les promotions
            </a>
          </div>
        </div>

        <div className="cover-photo">
          <img src={coverPhoto} alt="Identite visuelle MEL'S" />
          <div className="cover-badge">
            <strong>Nouvelle collection</strong>
            <span>Mode, beaute et accessoires</span>
          </div>
        </div>
      </section>

      <section className="featured-section" id="populaires">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Boutique</p>
            <h2>Explorez le catalogue MEL'S</h2>
          </div>
          <p>Parfums, vêtements, chaussures, accessoires et cosmétiques.</p>
        </div>

        <div className="shop-tools" aria-label="Outils de recherche boutique">
          <label>
            <span>Recherche</span>
            <input
              type="search"
              placeholder="Rechercher un produit"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </label>

          <label>
            <span>Tri</span>
            <select
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
            >
              <option value="popularite">Popularité</option>
              <option value="prix-croissant">Prix croissant</option>
              <option value="prix-decroissant">Prix décroissant</option>
            </select>
          </label>
        </div>

        <div className="category-filter" aria-label="Filtre par catégorie">
          {shopCategories.map((category) => (
            <button
              className={selectedCategory === category ? 'active' : ''}
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <article className="product-card" key={product.name}>
              <div className={`product-image ${product.color}`}>
                <span>{product.tag}</span>
              </div>
              <div className="product-info">
                <div>
                  <h3>{product.name}</h3>
                  <span>{product.category}</span>
                </div>
                <p>{formatPrice(product.price)}</p>
              </div>
              <button type="button">Ajouter au panier</button>
            </article>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="empty-message">Aucun produit ne correspond à votre recherche.</p>
        )}
      </section>

      <section className="category-section" id="categories">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Catégories</p>
            <h2>Trouvez vite ce qu'il vous faut</h2>
          </div>
        </div>

        <div className="category-grid">
          {shopCategories
            .filter((category) => category !== 'Tous')
            .map((category) => (
              <a className="category-tile" href="#populaires" key={category}>
                {category}
              </a>
            ))}
        </div>
      </section>

      <section className="new-section" id="nouveautes">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Nouveautes</p>
            <h2>Fraichement arrive chez MEL'S</h2>
          </div>
        </div>

        <div className="new-grid">
          {newProducts.map((product) => (
            <article className="new-item" key={product}>
              <span>Nouveau</span>
              <h3>{product}</h3>
              <p>Disponible cette semaine en quantite limitee.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="promo-section" id="promotions">
        <div>
          <p className="eyebrow">Promotions</p>
          <h2>-20% sur une selection de nouveautes</h2>
          <p>
            Offre de lancement pour souhaiter la bienvenue aux premieres
            clientes de MEL'S Boutique.
          </p>
        </div>
        <a className="primary-button" href="#populaires">
          Profiter de l'offre
        </a>
      </section>

      <section className="about-section" id="apropos">
        <div>
          <p className="eyebrow">À propos</p>
          <h2>Pourquoi acheter chez MEL'S ?</h2>
          <p>
            MEL'S Boutique choisit des articles utiles, élégants et faciles à
            porter, avec des prix clairs et une expérience pensée pour inspirer
            confiance dès la première visite.
          </p>
        </div>
      </section>

      <section className="reviews-section" id="avis">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Avis clients</p>
            <h2>Elles nous font confiance</h2>
          </div>
        </div>

        <div className="review-grid">
          {reviews.map((review) => (
            <article className="review-card" key={review.name}>
              <div className="stars">★★★★★</div>
              <p>{review.text}</p>
              <strong>{review.name}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Besoin d'un conseil avant de commander ?</h2>
          <p>Notre équipe vous aide à choisir les bonnes pièces.</p>
        </div>
        <a className="primary-button" href="mailto:contact@mels-shop.com">
          Contacter MEL'S
        </a>
      </section>

      <section className="cart-section" id="panier">
        <p>Votre panier est prêt à accueillir vos coups de cœur.</p>
      </section>
    </main>
  )
}

export default Home
