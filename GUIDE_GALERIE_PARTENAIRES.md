# Guide : Galerie & Partenaires

## 📸 Section Galerie & Événements

### Emplacement
La galerie se trouve sur la **page d'accueil**, juste après les témoignages.

### Fonctionnalités
✅ **Filtres par catégorie** : Tout, Attestations, Formations, Événements, Témoignages
✅ **Support images et vidéos** (YouTube)
✅ **Modal de visualisation** en plein écran
✅ **Animations** au scroll et au clic
✅ **Responsive** sur tous les écrans

### Comment personnaliser

#### 1. Ajouter vos médias

Éditez le fichier : `src/pages/Home/sections/GallerySection.jsx`

```javascript
const galleryItems = [
  {
    id: 1,
    type: 'image', // ou 'video'
    url: '/gallery/votre-image.jpg',
    thumbnail: '/gallery/votre-image.jpg',
    title: 'Titre de votre événement',
    date: '15 Décembre 2024',
    category: 'attestations' // ou 'formations', 'evenements', 'temoignages'
  },
  // Ajouter d'autres médias...
]
```

#### 2. Ajouter des images

**Option A : Images locales**
1. Créez le dossier `/public/gallery/`
2. Ajoutez vos images (ex: `remise-attestation-1.jpg`)
3. Référencez-les : `url: '/gallery/remise-attestation-1.jpg'`

**Option B : Images hébergées en ligne**
1. Uploadez vos images sur un service (Cloudinary, ImgBB, etc.)
2. Utilisez l'URL complète : `url: 'https://votre-url.com/image.jpg'`

#### 3. Ajouter des vidéos YouTube

```javascript
{
  type: 'video',
  url: 'https://www.youtube.com/embed/VOTRE_VIDEO_ID',
  thumbnail: '/gallery/video-thumbnail.jpg',
  title: 'Titre de la vidéo',
  category: 'temoignages'
}
```

**Pour obtenir l'ID YouTube :**
- URL YouTube : `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- ID : `dQw4w9WgXcQ`
- URL embed : `https://www.youtube.com/embed/dQw4w9WgXcQ`

#### 4. Activer les vraies images

Dans `GallerySection.jsx`, décommentez les lignes :

```javascript
// Ligne ~125 - Pour les thumbnails
<img 
  src={item.thumbnail} 
  alt={item.title}
  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
/>

// Ligne ~190 - Pour le modal
<img 
  src={selectedMedia.url} 
  alt={selectedMedia.title}
  className="w-full h-full object-contain"
/>
```

### Catégories disponibles
- `attestations` - Remises d'attestations
- `formations` - Sessions de formation
- `evenements` - Événements spéciaux
- `temoignages` - Témoignages vidéo

---

## 🤝 Section Partenaires

### Emplacement
La section partenaires se trouve sur la **page d'accueil**, après la galerie.

### Fonctionnalités
✅ **Grille responsive** : 2 colonnes mobile, 3 tablette, 6 desktop
✅ **Effet hover** élégant
✅ **Logos en niveaux de gris** qui se colorent au survol
✅ **CTA** pour devenir partenaire

### Comment personnaliser

#### 1. Ajouter vos partenaires

Éditez le fichier : `src/pages/Home/sections/PartnersSection.jsx`

```javascript
const partners = [
  {
    id: 1,
    name: 'Nom du partenaire',
    logo: '/partners/logo-partenaire.png',
    description: 'Description courte'
  },
  // Ajouter d'autres partenaires...
]
```

#### 2. Ajouter les logos

**Préparation des logos :**
1. Format recommandé : **PNG avec fond transparent**
2. Taille recommandée : **200x200px** minimum
3. Créez le dossier `/public/partners/`
4. Ajoutez vos logos : `logo-partenaire1.png`, `logo-partenaire2.png`, etc.

#### 3. Activer les vrais logos

Dans `PartnersSection.jsx`, décommentez les lignes ~75-81 :

```javascript
<img 
  src={partner.logo} 
  alt={partner.name}
  className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all"
/>
```

Et commentez/supprimez le placeholder (lignes ~68-74)

#### 4. Ajuster le nombre de colonnes

Si vous avez moins ou plus de 6 partenaires, modifiez la grille :

```javascript
// Pour 4 partenaires
<div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">

// Pour 8 partenaires
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
```

---

## 🎨 Conseils de design

### Pour la galerie
- **Photos** : Utilisez des images de bonne qualité (min 1200x800px)
- **Ratio** : Privilégiez le format 16:9 pour l'uniformité
- **Poids** : Optimisez vos images (max 500KB par image)
- **Nommage** : Utilisez des noms descriptifs (`remise-attestation-dec-2024.jpg`)

### Pour les partenaires
- **Logos** : PNG transparent, fond blanc ou transparent
- **Taille** : Tous les logos doivent avoir une taille similaire
- **Qualité** : Logos vectoriels (SVG) ou haute résolution
- **Couleurs** : Les logos seront en niveaux de gris par défaut

---

## 📂 Structure des dossiers

```
public/
├── gallery/
│   ├── remise-attestation-1.jpg
│   ├── remise-attestation-2.jpg
│   ├── formation-web.jpg
│   ├── concours-2024.jpg
│   └── video-thumb-1.jpg
└── partners/
    ├── partner1.png
    ├── partner2.png
    ├── partner3.png
    └── partner4.png
```

---

## 🚀 Exemples d'utilisation

### Exemple 1 : Remise d'attestation

```javascript
{
  id: 1,
  type: 'image',
  url: '/gallery/remise-dec-2024.jpg',
  thumbnail: '/gallery/remise-dec-2024.jpg',
  title: 'Remise des attestations - Promotion Décembre 2024',
  date: '15 Décembre 2024',
  category: 'attestations'
}
```

### Exemple 2 : Vidéo témoignage

```javascript
{
  id: 2,
  type: 'video',
  url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  thumbnail: '/gallery/temoignage-thumb.jpg',
  title: 'Témoignage de Jean - Développeur Web',
  date: '10 Novembre 2024',
  category: 'temoignages'
}
```

### Exemple 3 : Partenaire

```javascript
{
  id: 1,
  name: 'Orange Cameroun',
  logo: '/partners/orange.png',
  description: 'Partenaire télécommunications'
}
```

---

## ✅ Checklist avant publication

### Galerie
- [ ] Toutes les images sont optimisées
- [ ] Les vidéos YouTube sont publiques
- [ ] Les dates sont correctes
- [ ] Les catégories sont bien assignées
- [ ] Les titres sont descriptifs

### Partenaires
- [ ] Tous les logos sont au format PNG transparent
- [ ] Les logos ont une taille similaire
- [ ] Les noms sont corrects
- [ ] Le lien "Contactez-nous" fonctionne

---

## 🆘 Besoin d'aide ?

Si vous avez des questions ou besoin d'assistance pour :
- Optimiser vos images
- Uploader des vidéos sur YouTube
- Créer des logos transparents
- Personnaliser davantage les sections

N'hésitez pas à demander ! 🚀
