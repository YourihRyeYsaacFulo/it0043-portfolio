M4 Breakpoints

Breakpoint Justifications

480px — Contact Form
The breakpoint was chosen because the Contact form became cramped as the viewport narrowed from 500px toward 400px, so additional spacing and sizing adjustments were needed.

400px — Main Content Spacing
The breakpoint was chosen because the main content became more cramped at narrower widths, so the page padding needed to be reduced.

 360px — About Grid
The breakpoint was chosen because the two-column About layout became cramped between 400px and 320px, so the sections needed to stack into one column.

Breakpoint Challenge

1. What visible form problem starts at 480px that justifies changing the Contact page’s spacing?
The Contact form became cramped as the viewport narrowed from 500px toward 400px, so additional spacing and sizing adjustments were needed.

2. What changes in the form’s fit or alignment immediately above versus at and below 480px?
At 500px the form was comfortable to read, while below that range the form became more cramped and needed better spacing and field sizing.

3. If the fields already fit within the form, what observed issue does the added spacing solve?
The added spacing made the form less cramped and gave the controls more breathing room at narrower widths.

4. What main content becomes cramped at 400px, and on which page?
The main content on pages using the `<main>` element became more cramped at narrower widths, particularly as the available content area decreased.

5. What changes in readability or alignment immediately above versus at and below 400px?
At 500px the content was comfortable to read, while at 400px it began to feel cramped, so reducing the main padding gave the content more usable space.

6. What observation shows the spacing change is needed across all pages rather than only around specific content?
The spacing issue came from the general `<main>` content area rather than one specific component, so the adjustment was applied to pages that use `<main>`.

7. What About page content becomes too cramped at 360px?
The About page’s two-column sections become too narrow when displayed side by side at very small widths, making the content cramped.

8. How did you verify that the sections actually stack at 360px, given that the single-column instruction appears before the later two-column layout declaration?
I tested the About page at 360px in DevTools and observed that the sections stacked into a single column. The final CSS places the base two-column rule before the 360px media query, allowing the media-query rule to override it.

9. What visible change at 360px supports that threshold specifically?
Testing showed that the two-column layout was still comfortable at 400px but became cramped at 320px. Testing at 360px confirmed that switching to one column made the content more readable and less cramped.