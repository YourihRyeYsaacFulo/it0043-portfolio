Design Token Explanations & AI Defense Critique
1. Design Tokens Explained
Our design system uses functional CSS custom properties in :root to maintain visual consistency, accessibility, and clean architecture across all pages:
Color Tokens:
--color-background (#ffffff): Primary background surface color.
--background-color-secondary (#004b76): Primary dark blue surface used for header and footer backgrounds.
--color-text (#1a1a1a): High-contrast off-black for primary body text to ensure full legibility on light backgrounds.
--color-text-secondary (#004b76): Deep brand blue for section headings and emphasis text.
--color-text-tertiary (#000000): High-emphasis pure black.
--color-accent (#005f9e): Interactive blue token for focus indicators, links, and borders.
Spacing Tokens:
--space-small (0.5rem), --space-medium (1rem), --space-large (2rem): Systematized spacing scale for consistent margins, padding, and layout gaps.
Typography Tokens:
--font-main (helvetica, sans-serif): Universal sans-serif font stack.
--text-small (0.875rem), --text-body (1rem), --text-heading (2rem), --text-title (3rem): Typographic scale defined in rem units to respect user browser font preferences.

2. AI Arguments Accepted vs. Rejected
Accepted Arguments
 1. High-Contrast Text for Accessibility (WCAG 4.5:1 Target)
    AI Argument: Dark text on light surfaces yields much stronger legibility than light blue tones.
    Decision: Accepted. Our initial contrast measurements proved our original palette failed WCAG standards:
    Skyblue on White: 1.74:1 FAILED
    Skyblue on Dark Blue (rgb(0, 100, 158)): 3.31:1 FAILED
    By contrast, the AI's palette easily passed:
    Ink (#252832) on Paper (#f6f1e9): 13.08:1 PASSED
    Plum (#3d3048) on Paper (#f6f1e9): 10.89:1 PASSED
    White (#ffffff) on Plum (#3d3048): 12.25:1 PASSED
    #ffe0ad on Plum-Light (#5a4667): 6.59:1 PASSED
    Action Taken: Updated our tokens to high-contrast blue and off-black values (#1a1a1a and #004b76) to exceed the 4.5:1 ratio.

 2. Fluid Typography Sizing via clamp
    AI Argument: Static font sizes like 3rem cause awkward overflow and tight line clipping on mobile screens.
    Decision: Accepted. Testing at 320 px width showed fixed headings overflowing container boundaries. Replaced fixed values   with clamp(1.75rem, 5vw, var(--text-title)) for smooth responsiveness.
 3. Left-Alignment for Paragraph Text
    AI Argument: Left-aligned text is significantly easier to scan across multi-line blocks than center-aligned text.
    Decision: Accepted. Updated paragraph styling to text-align: left while maintaining centered structural headers.
 4. Explicit Keyboard Focus Outlines (:focus-visible)
    AI Argument: Interactive controls require visible focus outlines for keyboard navigation.
    Decision: Accepted. Added :focus-visible styles with offset outlines for links, buttons, and inputs.
Rejected Arguments
 1. Hard-coded Hex Values for Contextual Elements
    AI Defense: Hard-coding colors (e.g., #ffe0ad or zebra striping #faf7f2) avoids token clutter.
    Decision: Rejected. Hard-coded colors break global theme synchronization and maintainability. All values in our stylesheet must map to explicit :root design tokens.
    2. Relying Exclusively on Padding Reduction at 320 px for Data Tables
    AI Defense: Shrinking cell padding at 420 px is sufficient for table responsiveness.
    Decision: Rejected. When tested at 320 px width, wide tabular data still forced horizontal viewport scrolling. We added a dedicated .table-container wrapper with overflow-x: auto to properly protect the page layout.
