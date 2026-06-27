# Baghbaan Frontend Guidelines

Baghbaan is a premium botanical ordering experience with an editorial floral tone. Use soft cream, muted green, blush pink, and warm brown surfaces; keep cards rounded, airy, and high contrast.

- Primary typography: Playfair Display for headings, Cormorant Garamond for poetic/italic accents, Manrope for UI and body copy.
- Prefer gentle transitions, scroll reveals, subtle hover lift, and botanical imagery that feels curated rather than generic.
- Keep mobile layouts first: collapse grids, avoid viewport overflow, and keep controls tappable.
- Customer-facing cart and product actions should update shared cart state through `CartContext`.
- Do not expose admin navigation publicly; admin routes must remain guarded.
