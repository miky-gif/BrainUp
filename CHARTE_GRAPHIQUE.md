# Charte Graphique - BrainUp Technology

## 🎨 Palette de couleurs

### Couleurs principales

#### Bleu (Primary)
- **Bleu 50** : `#eff6ff` - Fond très clair
- **Bleu 100** : `#dbeafe` - Fond clair
- **Bleu 200** : `#bfdbfe` - Bordures légères
- **Bleu 300** : `#93c5fd` - Éléments secondaires
- **Bleu 400** : `#60a5fa` - Hover states
- **Bleu 500** : `#3b82f6` - Couleur principale
- **Bleu 600** : `#2563eb` - **Couleur phare principale**
- **Bleu 700** : `#1d4ed8` - Hover foncé
- **Bleu 800** : `#1e40af` - Texte important
- **Bleu 900** : `#1e3a8a` - Texte très foncé

#### Rouge (Secondary)
- **Rouge 50** : `#fef2f2` - Fond très clair
- **Rouge 100** : `#fee2e2` - Fond clair
- **Rouge 200** : `#fecaca` - Bordures légères
- **Rouge 300** : `#fca5a5` - Éléments secondaires
- **Rouge 400** : `#f87171` - Hover states
- **Rouge 500** : `#ef4444` - Couleur principale
- **Rouge 600** : `#dc2626` - **Couleur phare secondaire**
- **Rouge 700** : `#b91c1c` - Hover foncé
- **Rouge 800** : `#991b1b` - Texte important
- **Rouge 900** : `#7f1d1d` - Texte très foncé

#### Jaune (Accent)
- **Jaune 500** : `#eab308` - Accents et highlights
- **Jaune 600** : `#ca8a04` - Accents foncés

### Couleurs neutres
- **Gris 50-900** : Pour les textes, fonds et bordures
- **Blanc** : `#ffffff` - Fond principal
- **Noir** : `#000000` - Texte principal

## 🖼️ Logo

### Fichier
- **Emplacement** : `/public/logo.png`
- **Format** : PNG avec transparence
- **Utilisation** : 
  - Header : 48px × 48px
  - Footer : 48px × 48px
  - Pages auth : 80px × 80px

### Espacement
- Toujours laisser un espace minimum de 12px autour du logo
- Ne jamais déformer le logo
- Utiliser `object-contain` pour préserver les proportions

## 🎭 Typographie

### Polices
- **Titres** : Poppins (font-display)
  - Poids : 400, 500, 600, 700, 800, 900
- **Corps de texte** : Inter (font-sans)
  - Poids : 300, 400, 500, 600, 700, 800

### Hiérarchie
- **H1** : 3xl-5xl, font-bold
- **H2** : 2xl-4xl, font-bold
- **H3** : xl-2xl, font-bold
- **Body** : base-lg, font-normal
- **Small** : sm-xs, font-normal

## 🎨 Utilisation des couleurs

### Boutons
- **Primaire** : Fond bleu-600, texte blanc
- **Secondaire** : Fond rouge-600, texte blanc
- **Outline** : Bordure bleu-600, texte bleu-600

### Gradients
- **Hero** : `from-primary-600 via-secondary-600 to-primary-800`
- **Primary** : `from-primary-600 to-primary-700`
- **Secondary** : `from-secondary-600 to-secondary-700`
- **Text** : `from-primary-600 via-secondary-600 to-primary-700`

### États interactifs
- **Hover** : Assombrir de 100 (ex: 600 → 700)
- **Active** : Assombrir de 200 (ex: 600 → 800)
- **Focus** : Ring bleu-500 avec opacity 50%

## 📐 Espacements

### Padding
- **Card** : p-6 (24px)
- **Section** : py-12 ou py-16 (48px ou 64px)
- **Container** : px-4 sm:px-6 lg:px-8

### Gaps
- **Petits éléments** : gap-2 (8px)
- **Éléments moyens** : gap-4 (16px)
- **Grandes sections** : gap-8 ou gap-12 (32px ou 48px)

## 🎯 Composants

### Cards
```jsx
className="card" // bg-white rounded-xl shadow-md p-6
```

### Boutons
```jsx
className="btn btn-primary" // Bouton bleu
className="btn btn-secondary" // Bouton rouge
className="btn btn-outline" // Bouton outline bleu
```

### Input Fields
```jsx
className="input-field" // Champs de formulaire stylisés
```

## 🌈 Animations

### Durées
- **Rapide** : 150ms - 200ms (hover, focus)
- **Normal** : 300ms (transitions standards)
- **Lent** : 500ms - 600ms (animations d'entrée)

### Types
- **Fade in** : Apparition en fondu
- **Slide up** : Glissement vers le haut
- **Scale** : Agrandissement au survol (scale-105)

## 📱 Responsive

### Breakpoints
- **Mobile** : < 640px (sm)
- **Tablette** : 640px - 1024px (md, lg)
- **Desktop** : > 1024px (xl, 2xl)

### Approche
- Mobile-first
- Utiliser les classes responsive (sm:, md:, lg:, xl:)
- Tester sur tous les formats

## ✨ Bonnes pratiques

1. **Cohérence** : Toujours utiliser les classes Tailwind définies
2. **Accessibilité** : Contraste minimum 4.5:1 pour le texte
3. **Performance** : Optimiser les images et animations
4. **Maintenabilité** : Utiliser les composants réutilisables

## 🔗 Classes utilitaires personnalisées

- `.text-gradient` : Texte avec gradient bleu-rouge
- `.bg-gradient-hero` : Fond hero avec gradient
- `.bg-gradient-primary` : Gradient bleu
- `.bg-gradient-secondary` : Gradient rouge
- `.container-custom` : Container avec padding responsive
- `.section-title` : Style de titre de section
- `.section-subtitle` : Style de sous-titre de section
