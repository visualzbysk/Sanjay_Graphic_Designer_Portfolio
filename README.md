# Sanjay's Portfolio Build

# BUILD MY GRAPHIC DESIGN PORTFOLIO — EXACT REFERENCE RECREATION

Act as a senior frontend developer, creative developer, UI/UX engineer, and motion designer. Build my complete, production-ready graphic design portfolio website by faithfully recreating the reference screenshots and uploaded image assets.

**PROJECT OBJECTIVE**

Create a single-page, fully responsive, vertically scrollable portfolio website for **SANJAY KUMAR — GRAPHIC DESIGNER**, containing eight sections in this exact order:

1. Hello — animated opening screen
2. Sticky navigation bar
3. Home / Hero
4. About Me
5. Selected Works / Portfolio
6. Software & Tools
7. Contact
8. Thank You — animated closing screen

The navigation bar remains sticky at the top throughout scrolling. Every section belongs to the same page. Navigation buttons scroll to their respective sections.

## 1. NON-NEGOTIABLE DESIGN PRESERVATION RULES

Treat the uploaded screenshots as the source of truth. Recreate the existing design, not a new interpretation of it.

- Do not redesign, modernize, simplify, or replace the reference layout.
- Do not change the wording, headings, labels, project names, captions, or existing content.
- Do not substitute generated images, stock photos, random images, placeholder images, or unrelated portfolio projects for my uploaded assets.
- Do not replace my portrait with another person or alter the identity of the person in it.
- Do not change the established color palette, typography style, visual hierarchy, composition, spacing, decorative elements, or button appearance.
- Do not remove handwritten blue annotations, blue stars, arrows, underlines, geometric shapes, image borders, or the original decorative details shown in the references.
- Do not create separate routes for the eight sections.
- Do not place all screenshots on the page as flat background images. Rebuild the website with real HTML elements, CSS, and reusable React components. The screenshots are visual references, not substitutes for functional website sections.
- Do not create a generic template or invent additional sections.
- Preserve the reference design on desktop while adapting responsively to mobile and tablet without horizontal overflow.

When a reference image and a written instruction appear to conflict, preserve the screenshot's existing appearance and use the written instruction only to implement the requested functionality or animation.

## 2. TECHNOLOGY STACK

Use:

- React
- TypeScript
- Vite
- Tailwind CSS, with custom CSS where needed for faithful recreation
- Lucide React icons only where matching icons are needed
- Framer Motion or Motion for React for animations, if available in the project
- React hooks for functional interactions

Keep the implementation clean, reusable, maintainable, and production-ready.

Do not introduce a backend, database, authentication, unnecessary dependencies, or a new framework. Build the complete frontend directly.

## 3. FIRST ACTION: INSPECT ALL UPLOADED ASSETS

Before implementing the page:

1. Inspect every supplied reference screenshot.
2. Extract and inspect `Images.zip`.
3. Inspect all folders and image files inside the archive recursively.
4. Identify the correct image for every portfolio item by matching its filename, project name, category, and visual appearance against the screenshots.
5. Reuse the original images and preserve their content, aspect ratios, and intended crop.
6. Create a central project data file that maps each portfolio category to its original image files.
7. Use the exact portrait supplied for the About section and the exact artwork supplied for the Home collage.
8. Preserve image quality. Avoid unnecessary compression, filters, color changes, or artificial replacements.

If a required image cannot be found, do not silently substitute a different image. Check all supplied files and use the closest verified matching asset only when its identity is clear.

## 4. DESIGN SYSTEM — MATCH THE REFERENCES

### Colors

Use the screenshot's established palette:

- Electric royal blue: approximately `#214BFF` or the closest visually matched blue from the screenshots.
- Warm off-white / ivory background: approximately `#F6F3EC`.
- Primary text: near-black `#080808`.
- Secondary text: muted gray.
- Card borders: subtle warm gray.
- Card surfaces: off-white or warm ivory.
- Hover accent: the same royal blue.

Sample the actual uploaded screenshots and use the closest matching colors rather than introducing a new palette.

Use the warm ivory background across the main sections. Preserve the original variation in background shades where shown in the references.

### Typography

Typography is essential to this design.

- Use a large, elegant, italic script font for “Hello” and “Thank You”.
- Use a bold editorial serif similar to the reference for “PORTFOLIO”, “About Me”, and “Software & Tools”.
- Use a bold, hand-painted brush font for “SANJAY”, “SELECTED WORKS”, and “LET'S CREATE SOMETHING VISUAL”.
- Use a clean modern sans-serif for paragraphs, navigation, buttons, labels, project captions, and contact details.
- Use a handwritten marker style for the blue annotations.

Inspect the screenshots to identify the closest available font matches. If the uploaded assets include font files, use them. Otherwise, select visually similar web-safe or Google Fonts alternatives. Load the chosen fonts explicitly and assign each one to the correct text role.

Do not use one font for the entire site. Do not approximate the display typography with ordinary bold text.

### Layout and visual style

- Match the reference's generous whitespace and wide desktop composition.
- Maintain the exact visual hierarchy between display headings, body text, small uppercase labels, and decorative notes.
- Preserve the original section spacing, button dimensions, card proportions, image alignment, and grid structure.
- Use restrained transitions and smooth movement.
- Avoid gradients, glassmorphism, excessive rounded corners, neon effects, unnecessary shadows, and additional decorations not present in the reference.

## 5. SCREEN 1 — HELLO OPENING SCREEN

Reference: `Landing(4).jpg`

Create a full-viewport opening section matching the screenshot.

Exact text:

**Hello**

WELCOME TO MY

**PORTFOLIO**

DESIGN • CREATE • IMPACT

### Animation

- Render “Hello” in the large royal-blue italic script style.
- Animate the lettering as if it is being drawn progressively from left to right.
- Prefer an actual SVG path-stroke animation if a suitable script outline can be created accurately. Otherwise use a carefully implemented text-reveal mask that produces a convincing handwriting reveal.
- Complete the drawing animation, then hold the finished word briefly.
- Fade in “WELCOME TO MY”, followed by “PORTFOLIO”.
- Reveal the blue curved underline and star decorations with subtle movement.
- Fade in “DESIGN • CREATE • IMPACT” last.
- Keep the animation smooth, elegant, and consistent with the reference.

The opening screen should act as the entry experience, then smoothly reveal the main portfolio.

Do not replay the entire intro every time the user scrolls back to the top. Respect reduced-motion preferences.

## 6. SCREEN 2 — STICKY NAVIGATION

Reference: `Nav Menu.png`

Create the navigation bar using the exact reference layout:

Left:
- SANJAY KUMAR
- GRAPHIC DESIGNER

Center:
- HOME
- ABOUT
- WORKS
- TOOLS
- CONTACT

Right:
- LET'S TALK →

### Behavior

- Keep the navigation sticky at the top using `position: sticky` or a properly implemented fixed header.
- Give the header a warm ivory background and the thin borders shown in the screenshot.
- Maintain a high enough z-index so the header remains visible above the scrolling sections.
- HOME scrolls to the Home section.
- ABOUT scrolls to About Me.
- WORKS scrolls to Selected Works.
- TOOLS scrolls to Software & Tools.
- CONTACT scrolls to Contact.
- LET'S TALK → scrolls to the Contact section.
- Use smooth scrolling with appropriate scroll offsets so section headings are not hidden behind the sticky header.
- Update the active navigation item according to the section currently in view.
- Match the blue active underline shown in the reference.

### Navigation button hover animation

Recreate the uploaded button hover references.

- Default button: royal-blue background, white uppercase text, and a right arrow.
- On hover: create the reference's subtle black offset shadow / black base effect.
- Animate the shadow, background, and arrow position smoothly.
- On mouse leave, return to the exact original appearance.
- Provide visible keyboard focus and touch-friendly interaction.

## 7. SCREEN 3 — HOME / HERO

Reference: `Hero(4).jpg`

Recreate the desktop hero section with the same left-right composition.

### Left column

Small breadcrumb:

IDEAS → VISUALS → IMPACT

Main display name:

**SANJAY**

Professional title:

**GRAPHIC DESIGNER**

Description:

Creating bold visuals, meaningful compositions, and engaging designs for brands, entertainment, and digital media.

Buttons:

VIEW MY WORK →

CONTACT ME

### Right column

Recreate the overlapping, slightly rotated portfolio-artwork collage using the exact matching images from the uploaded folders.

The collage includes the reference's:

- Music poster
- Photo manipulation artwork
- Live concert poster
- Branding poster

Keep the overlapping white borders, rotations, realistic shadows, and royal-blue geometric backing shape. Match the composition and image arrangement in the screenshot.

Add the existing handwritten annotation:

DESIGN A BETTER TOMORROW.

Include the curved arrow and small blue decorative symbols.

### Bottom labels

Left:

POSTERS / THUMBNAILS / BRANDING / SOCIAL MEDIA / DIGITAL DESIGN

Right:

AVAILABLE FOR CREATIVE OPPORTUNITIES

### Home interactions

- Clicking VIEW MY WORK → scrolls to Selected Works.
- Clicking CONTACT ME scrolls to Contact.
- On hover, each artwork lifts slightly, rotates subtly toward its resting angle, and receives a delicate shadow adjustment.
- Keep the movement small and professional.
- Do not crop, replace, or recolor the artwork.
- Add a subtle entrance animation to the hero content, while preserving the screenshot's layout.

## 8. SCREEN 4 — ABOUT ME

Reference: `About(6).jpg`

Recreate the About section with the same layout and text.

### Left side

Use the exact uploaded portrait of Sanjay.

Reproduce the royal-blue irregular polygon behind the photograph, its positioning, the small star decorations, and the overlapping dark label.

Dark label text:

DESIGN
CREATE
INSPIRE

Handwritten annotations:

SAME PERSON DIFFERENT IDEAS

SANJAY

### Right side

Small section label:

02 - ABOUT

Heading:

About Me

Subtitle:

Designer. Visual Thinker. Creative Problem Solver.

Paragraph one:

I'm a Graphic Designer passionate about creating visually engaging designs that communicate ideas clearly and leave a strong impression. I enjoy working across entertainment graphics, promotional designs, social media creatives, branding, thumbnails, and digital content.

Paragraph two:

My focus is not just on making a design look good, but on creating visuals with strong hierarchy, typography, composition, color, and purpose.

Preserve all text exactly.

Handwritten annotation:

GOOD DESIGN GOOD STORIES

### Three cards

Card 1:

SPECIALIZATION

Graphic Design

Brand Identity · Print · Digital

Card 2:

INTEREST

Media & Entertainment

Media · Entertainment · Digital Content

Card 3:

DESIGN APPROACH

Creative & Clean

Creative · Clean · Impactful

Use matching outline icons, subtle borders, and the same layout shown in the screenshot.

### Scroll and hover animation

- Fade and slide the portrait and text into view when the section enters the viewport.
- Animate the blue polygon subtly without moving the portrait away from its original position.
- Reveal the three cards in a staggered sequence.
- On hover, each card scales up slightly and receives a visible but restrained royal-blue shadow or blue edge accent.
- Restore the original appearance on mouse leave.
- Do not add new About content.

## 9. SCREEN 5 — SELECTED WORKS / PORTFOLIO FILTERS

References:

- `Works (1)(3).jpg`
- `Works (2)(1).jpg`
- `Works (3)(1).jpg`
- `Works (4).jpg`
- `Works (5).jpg`
- `Works (6).jpg`

Recreate the portfolio section precisely.

Small label:

03 - PORTFOLIO

Main heading:

SELECTED WORKS

Description:

A collection of designs created for digital media, entertainment, branding, and promotional content.

Handwritten annotation:

IDEAS DESIGNED DIFFERENTLY

### Category buttons

Create these seven interactive filter buttons in this exact order:

ALL

POSTERS

FLYERS

THUMBNAILS

BRANDING

SOCIAL MEDIA

PRINT DESIGN

Match the rounded gray inactive pills and solid royal-blue active pill shown in the references.

### Required category-to-image mapping

**POSTERS — 8 items**

1. MUSIC POSTER
2. ARTIST POSTER
3. MANIPULATION
4. MUSIC CAMPAIGN
5. MUSIC CAMPAIGN
6. GAMING POSTER
7. LIVE CONCERT POSTER
8. BRANDING POSTER

**FLYERS — 5 items**

1. CAFE OPENING FLYERS
2. FOOD OFFER FLYERS
3. GYM SHOP FLYERS
4. WORKSHOP FLYERS
5. MUSIC FEST FLYERS

**THUMBNAILS — 8 items**

1. GAMING THUMBNAIL
2. YOUTUBE MILESTONE THUMBNAIL
3. LIVE STREAM THUMBNAIL
4. SHORT FILM SERIES THUMBNAIL
5. TECH STACK THUMBNAIL
6. FOOD CHALLENGE VIDEO THUMBNAIL
7. BRAND REDESIGN THUMBNAIL
8. TRAVEL VLOG THUMBNAIL

**BRANDING — 8 items**

1. TEA BRAND LOGO
2. TEA BRAND MOCKUP
3. JUICE BRAND LOGO
4. JUICE BRAND MOCKUP
5. CLOTHING BRAND LOGO
6. CLOTHING BRAND MOCKUP
7. CASHEW BRAND LOGO
8. CASHEW BRAND MOCKUP

**SOCIAL MEDIA — 8 items**

1. CAFE SOCIAL MEDIA POST
2. FESTIVAL EVENT SOCIAL MEDIA POST
3. SPORTS SHOE LAUNCH POST
4. BEAUTY BRAND SOCIAL MEDIA POST
5. YOUTUBE MILESTONE POST
6. HOTEL SOCIAL MEDIA POST
7. TRAVEL DESTINATION POST
8. SMARTPHONE LAUNCH POST

**PRINT DESIGN — 6 items**

1. SA DESIGNS BUSINESS CARD
2. SAFFRON TABLE TENT
3. THAMIRAI RESTAURANT MENU
4. NOVA LIVING PRODUCT CATALOGUE
5. THE AARA RESORT BROCHURE
6. NOVA ROAST COFFEE PACKAGING

Use the matching reference screenshot to verify exact spelling, capitalization, and punctuation of every caption before finalizing.

For each project, match the original image file by its name and visual appearance. Do not invent artwork.

### ALL filter

The ALL filter displays every verified portfolio project from all six categories, using the same project captions and matching images.

### Filtering functionality

- The selected category must change the active pill to blue.
- Clicking a category filters the displayed projects immediately.
- Render only the relevant category's projects.
- Use a smooth opacity and subtle vertical-motion transition when the category changes.
- Keep the page position stable during filtering.
- Do not reload the page or navigate to a separate route.
- Prevent unnecessary layout jumps and preserve the card proportions.

### Project grid

- Match the number of columns and spacing in each reference screenshot.
- Use the reference's image sizes, captions, whitespace, and grid rhythm.
- Use consistent object-fit behavior based on each asset's intended presentation.
- Never force landscape thumbnails into portrait proportions or portrait posters into landscape proportions.
- Add only restrained hover feedback, such as a slight image lift or subtle scale.
- Preserve the original artwork without overlays that obscure the designs.

## 10. SCREEN 6 — SOFTWARE & TOOLS

Reference: `Tools(5).jpg`

Recreate the Software & Tools section.

Small label:

04 - PRACTICE

Heading:

Software & Tools

Description:

The creative tools I use to bring ideas to life.

Handwritten annotation:

Good Tools
Better Designs

My Stack

### Six tool cards

Card 1:

Adobe Photoshop

RASTER & PHOTO

Posters · Photoshop Manipulation · Compositing · Thumbnails

Card 2:

Adobe Illustrator

VECTOR & BRANDING

Branding · Logos · Vector Graphics

Card 3:

Canva

SOCIAL & QUICK

Social Media · Promotional Creatives · Quick Designs

Card 4:

Figma

UI & PROTOTYPING

UI Designs · Layout · Prototyping

Card 5:

Adobe Lightroom

PHOTO & COLOR

Photo Editing · Color Grading · Visual Enhancement

Card 6:

CAPCUT

VIDEO & MOTION

Video Editing · Motion Graphics · Content Creation

Preserve the six-card layout, tool icons, small numerical labels, subtle top blue lines, borders, and shadows.

Bottom statement:

DESIGN TOOLS ARE ONLY THE MEDIUM. IDEAS CREATE THE IMPACT.

### Interaction

- On hover, cards scale up slightly.
- Add a smooth shadow and royal-blue edge highlight.
- Move the card upward a few pixels.
- Keep the icon, title, subtitle, and description readable.
- Add a subtle scroll-reveal animation.
- Do not turn the cards into links unless an actual destination is supplied.

## 11. SCREEN 7 — CONTACT

Reference: `Contact(5).jpg`

Recreate the contact section using the same two-column layout.

### Left column

Small label:

05 - CONTACT

Main heading with matching brush typography:

LETS CREATE
SOMETHING
VISUAL

Render VISUAL in royal blue.

Description:

Have a project, campaign, or creative opportunity?
I'd love to work together.

Name:

SANJAY KUMAR

Role:

Graphic Designer

Subheading:

CONTACT INFORMATION

Contact details:

EMAIL — visualsby sk@gmail.com

Use the exact email address visible in the supplied screenshot. The intended address shown in the reference is `visualsbysk@gmail.com`.

PHONE — +91 86670 39411

LOCATION — Chennai, Tamil Nadu, India

LINKED IN — https://www.linkedin.com/in/builtbysanjay/

INSTAGRAM — crazy_heart_b.e.a.t.s

Keep the information, order, labels, and horizontal separators consistent with the reference.

### Right column form

Heading:

START A CONVERSATION

Fields:

NAME

EMAIL

MESSAGE

Button:

SEND MESSAGE →

Below the form:

GET IN TOUCH →

VIEW MY WORK

Social labels:

EMAIL

LINKED IN

INSTAGRAM

BEHANCE

Do not invent a Behance URL or other missing social URLs.

### Contact functionality

- Use real, accessible name, email, and message fields.
- Validate required fields and email format.
- Display clear success or error feedback.
- Do not claim an email was sent unless an actual email service has been configured and the submission succeeds.
- If no email backend is configured, create a clearly identified integration point and explain that a service such as EmailJS or a server endpoint is required to send messages.
- Keep the design and interaction functional even before email integration.
- GET IN TOUCH → scrolls to the contact form or focuses its first field.
- VIEW MY WORK scrolls to Selected Works.
- Use `mailto:` for email and `tel:` for the phone number.
- Use real links for LinkedIn and Instagram.
- Use the original screenshot's button dimensions, spacing, borders, colors, and arrow placement.

### Hover animations

Match the uploaded button hover screenshots:

- Royal-blue primary button with white text.
- A subtle black offset shadow or base appears on hover.
- Smooth movement and color transitions.
- A restrained arrow slide to the right.
- Secondary buttons transition to their reference hover appearance, including the black-filled state where shown.
- Restore the exact default state on mouse leave.

## 12. SCREEN 8 — THANK YOU CLOSING SCREEN

Reference: `Thanks you(3).jpg`

Recreate the full-viewport closing section.

Main display text:

Thank You

Subtitle:

LET'S CREATE

SOMETHING GREAT.

Decorative blue curved underline and star shapes.

Handwritten annotation:

GOOD THINGS STARTS WITH A HELLO

Button:

BACK TO HOME →

Bottom tagline:

DESIGN • CREATE • IMPACT

### Animation

- Draw “Thank You” in the same royal-blue script style used for “Hello”.
- Use a left-to-right stroke or convincing text-reveal animation.
- Fade in the subtitle line by line after the main script reveal.
- Animate the underline and decorative stars subtly.
- Reveal the handwritten annotation and arrow.
- Fade in the BACK TO HOME button and bottom tagline last.
- BACK TO HOME smoothly scrolls to the Home section.
- Use the same typography, colors, spacing, and composition as the reference.

This section must appear at the end of the same scrollable page, not on a separate thank-you route.

## 13. PAGE STRUCTURE AND SCROLL EXPERIENCE

Implement these section IDs:

- `intro`
- `home`
- `about`
- `works`
- `tools`
- `contact`
- `thanks`

The navigation header is shared across the main portfolio sections.

Use a smooth, continuous scrolling experience. The opening screen must not trap the visitor or prevent access to the portfolio. Provide a natural transition into Home and keep all navigation controls accessible.

Use Intersection Observer or the motion library's viewport features for scroll-triggered animations. Avoid triggering repeated animations on every tiny scroll movement.

The final Thank You section must be reachable by scrolling naturally past Contact.

## 14. ANIMATION SYSTEM

Use one consistent animation language across the site:

- Script drawing animation for Hello and Thank You.
- Fade and slight vertical movement for section entrances.
- Staggered card reveals.
- Small image lifts and subtle rotation adjustments.
- Small card scale and shadow transitions.
- Animated active navigation underline.
- Smooth filter transitions in Selected Works.
- Blue buttons with subtle black offset-shadow hover states.
- Slight arrow movement on button hover.
- Smooth anchor scrolling.

Animation duration should generally remain around 200–600 ms for hover interactions and approximately 600–1200 ms for major section reveals. The main script drawing animation may be longer.

Do not animate every element simultaneously. Preserve the premium editorial appearance.

Use `prefers-reduced-motion` to disable or simplify nonessential animations for users who request reduced motion.

## 15. RESPONSIVE BEHAVIOR

Desktop:

- Match the supplied screenshots as closely as possible.
- Preserve the wide composition and multi-column portfolio grids.

Tablet:

- Maintain the typography hierarchy.
- Reduce column counts and spacing only where needed.
- Prevent overlap between the collage and text.

Mobile:

- Use a compact responsive navigation with an accessible menu if the desktop menu cannot fit.
- Keep all five navigation destinations available.
- Stack hero text and collage without hiding any important content.
- Stack the About portrait and text.
- Use a two-column or single-column project grid depending on available width.
- Stack the tool cards and contact form.
- Preserve the original color palette, font character, content, decorative identity, and section order.
- Prevent horizontal overflow and ensure touch-friendly buttons.

Do not remove project cards, text, or sections on smaller screens.

## 16. CODE ORGANIZATION

Use reusable components, for example:

- `IntroSection`
- `Navbar`
- `HeroSection`
- `AboutSection`
- `PortfolioSection`
- `PortfolioFilters`
- `PortfolioCard`
- `ToolsSection`
- `ToolCard`
- `ContactSection`
- `ContactForm`
- `ThankYouSection`

Maintain a central data source for project metadata and image paths. Use stable project IDs and category values.

Use the existing project structure if a Lovable project is already initialized. Avoid rewriting unrelated configuration.

## 17. FINAL VERIFICATION CHECKLIST

Before considering the implementation complete, verify all of the following:

1. All eight visual stages are represented in the correct order.
2. All seven requested portfolio filters work.
3. Every project uses the correct original uploaded image.
4. No portfolio artwork has been replaced by an AI-generated image.
5. The sticky navbar remains visible while scrolling.
6. Each navigation item scrolls to the correct section.
7. LET'S TALK scrolls to Contact.
8. VIEW MY WORK scrolls to Selected Works.
9. CONTACT ME scrolls to Contact.
10. BACK TO HOME returns to Home.
11. The Hello and Thank You animations work without blocking access to the site.
12. Card and button hover animations work.
13. The contact form validates its inputs.
14. The layout works on desktop, tablet, and mobile.
15. No image paths are broken.
16. No buttons are decorative when they are supposed to work.
17. There are no unnecessary routes, sections, placeholder projects, or duplicate navigation bars.
18. The browser console has no avoidable runtime errors.
19. The original screenshots remain the primary visual reference throughout development.
20. Do not stop after generating a rough first draft. Inspect the rendered result and correct visible discrepancies.

**FINAL INSTRUCTION**

Build the entire website now in one implementation pass. Prioritize exact visual fidelity to the supplied screenshots, accurate reuse of uploaded assets, correct text, working portfolio filters, functional navigation, and smooth animations.

Do not return only a plan or a description. Implement the working website in the project. Do not ask me to choose a new design or supply content already included in the screenshots and instructions.

The final result should feel like the same portfolio shown in my reference images, faithfully recreated as one complete, responsive, animated website.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/ff79ac94-7c04-4279-a807-feac401881e3).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
