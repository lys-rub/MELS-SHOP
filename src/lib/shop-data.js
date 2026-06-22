export const categories = ['Tous', 'Parfums', 'Vêtements', 'Chaussures', 'Accessoires', 'Cosmétiques']

export const products = [
  {
    id: 'robe-satin-elegante',
    name: 'Robe satin élégante',
    category: 'Vêtements',
    price: 89000,
    tag: 'Populaire',
    rating: 4.8,
    description: 'Une robe longue satinée avec une coupe fluide et un drapé moderne.',
    details: ['Matière satinée légère', 'Coupe longue et fluide', 'Doublure douce et confortable'],
    availability: 'En stock',
    stock: 12,
    images: [
      'https://images.unsplash.com/photo-1521335629791-ce4aec67dd47?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80',
    ],
    accent: 'bg-[#f6e5dd]',
    reviews: [
      { author: 'Amina Z.', rating: 5, feedback: 'Très belle robe, la coupe est superbe et le tissu est agréable.' },
      { author: 'Mélanie P.', rating: 4, feedback: 'La couleur est fidèle et la livraison a été rapide.' },
    ],
  },
  {
    id: 'sac-mini-luxe',
    name: 'Sac mini luxe',
    category: 'Accessoires',
    price: 55000,
    tag: 'Best-seller',
    rating: 4.6,
    description: 'Un sac compact en faux cuir premium et double chaîne dorée.',
    details: ['Chaîne dorée amovible', 'Intérieur doublé à poches', 'Fermeture aimantée'],
    availability: 'Stock limité',
    stock: 7,
    images: [
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1495121605193-b116b5b9c5d1?auto=format&fit=crop&w=1200&q=80',
    ],
    accent: 'bg-[#f8ede4]',
    reviews: [
      { author: 'Nathalie R.', rating: 5, feedback: 'Très chic. Très belle qualité pour le prix.' },
      { author: 'Julie K.', rating: 4, feedback: 'Compact et parfait pour les soirées.' },
    ],
  },
  {
    id: 'sandales-dorees',
    name: 'Sandales dorées',
    category: 'Chaussures',
    price: 66000,
    tag: 'Tendance',
    rating: 4.7,
    description: 'Sandales à brides fines et détails métalliques raffinés.',
    details: ['Semelle confortable', 'Détails métalliques dorés', 'Bride réglable'],
    availability: 'En stock',
    stock: 18,
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1475180098323-1c6a6b8c631f?auto=format&fit=crop&w=1200&q=80',
    ],
    accent: 'bg-[#fff4ea]',
    reviews: [
      { author: 'Camille T.', rating: 5, feedback: 'Parfaites pour l’été. Très confortables et élégantes.' },
      { author: 'Léa B.', rating: 4, feedback: 'J’adore les détails brillants.' },
    ],
  },
  {
    id: 'parfum-signature',
    name: 'Parfum signature MEL’S',
    category: 'Parfums',
    price: 72000,
    tag: 'Premium',
    rating: 4.9,
    description: 'Fragrance chaude et enveloppante, parfaite pour les soirées.',
    details: ['Notes de vanille et musc', 'Flacon premium', 'Longue tenue'],
    availability: 'En rupture',
    stock: 0,
    images: [
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1495121605193-b116b5b9c5d1?auto=format&fit=crop&w=1200&q=80',
    ],
    accent: 'bg-[#f5e6dc]',
    reviews: [
      { author: 'Sofia M.', rating: 5, feedback: 'Une odeur subtile et sophistiquée, j’en suis fan.' },
      { author: 'Elodie V.', rating: 5, feedback: 'Texture légère et tenue incroyable.' },
    ],
  },
  {
    id: 'gloss-hydratant',
    name: 'Gloss hydratant',
    category: 'Cosmétiques',
    price: 26000,
    tag: 'Nouveau',
    rating: 4.5,
    description: 'Gloss confortable, brillant et enrichi en huile de jojoba.',
    details: ['Fini brillant', 'Hydratation longue durée', 'Formule non collante'],
    availability: 'En stock',
    stock: 24,
    images: [
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1495121605193-b116b5b9c5d1?auto=format&fit=crop&w=1200&q=80',
    ],
    accent: 'bg-[#f8f1ec]',
    reviews: [
      { author: 'Inès D.', rating: 5, feedback: 'Super agréable à porter, pas du tout collant.' },
      { author: 'Maïa B.', rating: 4, feedback: 'Le rendu est lumineux et doux.' },
    ],
  },
]

export const collections = [
  {
    title: 'Élégance quotidienne',
    subtitle: 'Des silhouettes faciles à porter, stylées et fluides.',
    items: ['Robe satin', 'Chemise fluide', 'Sac mini luxe'],
  },
  {
    title: 'Soirée dorée',
    subtitle: 'Des looks créés pour briller à chaque sortie.',
    items: ['Sandales dorées', 'Parfum signature', 'Bijoux fins'],
  },
  {
    title: 'Beauté chérie',
    subtitle: 'Des soins et des textures choisies pour sublimer la peau.',
    items: ['Gloss hydratant', 'Palette nude', 'Crème satinée'],
  },
]

export const reviews = [
  {
    author: 'Grace M.',
    feedback: "Les articles sont beaux et la livraison était rapide. J'ai adoré le service.",
  },
  {
    author: 'Sarah K.',
    feedback: "MEL'S donne vraiment une impression de qualité. Les pièces sont bien choisies.",
  },
  {
    author: 'Deborah L.',
    feedback: 'Belle boutique, prix clairs et communication très professionnelle.',
  },
]

export const getProductById = (id) => products.find((product) => product.id === id)

export const formatPrice = (price) => `${price.toLocaleString('fr-FR')} FC`
