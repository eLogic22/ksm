# KSM Cricket Academy - Static Website

A modern, responsive cricket academy website built with pure HTML, CSS, and vanilla JavaScript. Inspired by the design of cricketacademyofpathans.com, customized for **KSM Cricket Academy**.

## Features

- Fully responsive design (mobile, tablet, desktop)
- Modern UI with cricket-themed color palette (green & gold)
- Hero slider with auto-advance and clickable dots
- Animated counters for statistics
- Mobile-friendly slide-in navigation
- WhatsApp floating contact button
- 10 fully designed pages
- Working contact, registration & franchise forms (demo mode)
- Font Awesome icons & Google Fonts (via CDN)
- Embedded Google Maps on contact page
- Image-rich galleries and news/media sections

## Pages

| Page | File |
|---|---|
| Home | `index.html` |
| About Us | `about.html` |
| Our Team | `team.html` |
| Technology | `technology.html` |
| Centres | `centres.html` |
| Gallery | `gallery.html` |
| Media & News | `media.html` |
| Registration | `registration.html` |
| Franchise | `franchise.html` |
| Contact | `contact.html` |

## Project Structure

```
ksm/
├── index.html
├── about.html
├── team.html
├── technology.html
├── centres.html
├── gallery.html
├── media.html
├── registration.html
├── franchise.html
├── contact.html
├── README.md
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── main.js
    └── images/   (placeholder folder for your own images)
```

## How to Run

### Option 1: With XAMPP (since project lives in `htdocs/ksm`)
1. Start Apache from the XAMPP Control Panel.
2. Open your browser and visit: `http://localhost/ksm/`

### Option 2: Open Directly
Double-click any `.html` file. The site will open in your default browser. All assets are local + CDN, so no server is required.

### Option 3: VS Code Live Server
- Install the "Live Server" extension.
- Right-click `index.html` → "Open with Live Server".

## Customizing

### Colors / Theme
All color variables are defined in `assets/css/style.css` at the top inside the `:root` block:

```css
:root {
    --primary: #0d6e3a;   /* Cricket green */
    --accent:  #f5b301;   /* Gold */
    ...
}
```

Change these once and the entire site will update.

### Logo
The logo uses a Font Awesome cricket-ball icon (`fa-baseball`). Replace `.logo-icon` content with an `<img>` tag inside each page's header to use your own logo image.

### Images
- Currently using Unsplash CDN images (require internet).
- Replace `<img src="https://images.unsplash.com/...">` with your own images in `assets/images/`.

### Contact Info
Phone number, email and address appear in:
- Top bar (every page)
- Footer (every page)
- Contact page

Update them in each file (Find & Replace) to keep them consistent.

### Forms
All forms are currently demo (handled via JavaScript alert). To make them functional:
- Add `action="your-handler.php"` and `method="POST"` to the `<form>` tag
- Remove the `data-demo` attribute
- Build the corresponding backend (PHP / Node / etc.)

## Browser Support

Works on all modern browsers (Chrome, Firefox, Edge, Safari, Opera).
Designed mobile-first with full responsiveness from 320px width and up.

## Credits

- Icons: [Font Awesome 6](https://fontawesome.com/)
- Fonts: [Poppins](https://fonts.google.com/specimen/Poppins) & [Inter](https://fonts.google.com/specimen/Inter) — Google Fonts
- Sample images: [Unsplash](https://unsplash.com/) (free for use)

---

© 2026 KSM Cricket Academy
