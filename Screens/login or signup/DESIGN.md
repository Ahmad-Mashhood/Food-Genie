---
name: Food Genie
colors:
  surface: '#fbf8ff'
  surface-dim: '#d7d8f4'
  surface-bright: '#fbf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f2ff'
  surface-container: '#edecff'
  surface-container-high: '#e6e6ff'
  surface-container-highest: '#e0e0fc'
  on-surface: '#181a2e'
  on-surface-variant: '#594139'
  inverse-surface: '#2d2f44'
  inverse-on-surface: '#f1efff'
  outline: '#8d7168'
  outline-variant: '#e1bfb5'
  surface-tint: '#ab3500'
  primary: '#ab3500'
  on-primary: '#ffffff'
  primary-container: '#ff6b35'
  on-primary-container: '#5f1900'
  inverse-primary: '#ffb59d'
  secondary: '#b7102a'
  on-secondary: '#ffffff'
  secondary-container: '#db313f'
  on-secondary-container: '#fffbff'
  tertiary: '#7d5800'
  on-tertiary: '#ffffff'
  tertiary-container: '#c98f00'
  on-tertiary-container: '#432e00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbd0'
  primary-fixed-dim: '#ffb59d'
  on-primary-fixed: '#390c00'
  on-primary-fixed-variant: '#832600'
  secondary-fixed: '#ffdad8'
  secondary-fixed-dim: '#ffb3b1'
  on-secondary-fixed: '#410007'
  on-secondary-fixed-variant: '#92001c'
  tertiary-fixed: '#ffdea9'
  tertiary-fixed-dim: '#ffba27'
  on-tertiary-fixed: '#271900'
  on-tertiary-fixed-variant: '#5e4100'
  background: '#fbf8ff'
  on-background: '#181a2e'
  surface-variant: '#e0e0fc'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style

The design system is centered on the concept of "Culinary Joy." It targets food enthusiasts and busy home cooks who seek inspiration through AI. The personality is energetic, helpful, and highly appetizing, aiming to evoke a sense of warmth and immediate hunger.

The design style is **Modern Tactile Minimalism**. It utilizes high-contrast color pops against soft, cream-toned backgrounds to create a friendly and premium atmosphere. The UI relies on generous whitespace and "squishy" high-radius components that feel approachable and responsive to the touch. It balances the futuristic nature of AI with the organic, grounded reality of fresh ingredients.

## Colors

This design system uses a "Sun-Drenched" palette to stimulate appetite and engagement. 

- **Primary (Energetic Orange):** Used for main actions, brand identifiers, and active states.
- **Secondary (Deep Red):** Reserved for high-importance highlights, "hot" deals, or secondary brand accents.
- **Accent (Warm Yellow):** Used for ratings, AI-generated tips, and subtle highlights to draw the eye.
- **Background (Soft Cream):** The foundation of the app, providing a much warmer and more appetizing base than pure white.
- **Text (Modern Dark Navy):** Provides high legibility and a grounding professional contrast to the vibrant brand colors.

## Typography

The typography strategy pairs the confident, geometric character of **Montserrat** for headings with the systematic clarity of **Inter** for functional text. 

Headings should use tight letter spacing and bold weights to command attention. Body text is optimized for readability during cooking, with generous line heights to ensure instructions are easy to follow from a distance. Label styles are set in semi-bold to ensure they remain distinct even at small scales on dense recipe cards.

## Layout & Spacing

This design system uses a **Fluid-Fixed Hybrid Grid**. The content is centered within a maximum width of 1280px for desktop to maintain readability, but backgrounds and decorative elements may bleed to the edges.

- **Desktop (1024px+):** 12-column grid, 24px gutters, 48px minimum side margins.
- **Tablet (768px - 1023px):** 8-column grid, 20px gutters, 32px side margins.
- **Mobile (Under 767px):** 4-column grid, 16px gutters, 16px side margins.

Horizontal spacing between cards and image-heavy content should remain generous to prevent the UI from feeling cluttered. AI chat interfaces should utilize a narrower, centered column (approx 800px) for better focus.

## Elevation & Depth

Hierarchy is established using **Tonal Layering** and **Ambient Shadows**. 

1. **Base Layer:** The Soft Cream background (`#FFF8F0`).
2. **Container Layer:** Pure white (`#FFFFFF`) containers are used for recipe cards, input fields, and chat bubbles to make them pop.
3. **Shadows:** We use a "Soft-Focus" shadow style. Shadows are never pure black; they are tinted with the Brand Navy or Deep Red at very low opacities (e.g., `rgba(43, 45, 66, 0.08)`).
   - *Low Elevation:* 4px blur, 2px Y-offset. Used for subtle card definition.
   - *High Elevation:* 20px blur, 10px Y-offset. Used for floating action buttons and active modals.

## Shapes

The shape language is "Organic Geometric." High-radius corners are mandatory to maintain the friendly, modern personality.

- **Standard Elements:** 16px (`1rem`) corner radius for standard buttons and small cards.
- **Large Containers:** 24px (`1.5rem`) for recipe cards and modal containers.
- **AI Bubbles:** 24px on three corners, with one 4px corner to indicate directionality.
- **Imagery:** Food photography should always have rounded corners (16px+) or be contained within circular masks to maintain the soft aesthetic.

## Components

### Buttons
Primary buttons use the Energetic Orange with white text, 16px rounded corners, and a subtle lift shadow. Secondary buttons use a transparent background with a 2px Orange border.

### Recipe Cards
White containers with a 24px radius. Images should sit at the top with no top-margin (bleeding into the card edge). Use high-quality food photography. Include a "Save" icon in the top right floating on a semi-transparent blur circle.

### Input Fields (The AI "Ask")
A tall, 32px rounded pill-shaped bar. Use the Warm Yellow for the focus ring to indicate the "Genie" is listening/active. Iconography should be thin-stroke but slightly playful.

### Chips & Tags
Used for dietary labels (e.g., "Vegan", "Keto"). These should have 100px (pill) radius, using low-opacity versions of the Brand colors (e.g., 10% Orange background with 100% Orange text).

### Progress Indicators
When the AI is generating a recipe, use a pulsating animation on a "Chef Hat" or "Magic Wand" icon using the Accent Yellow.