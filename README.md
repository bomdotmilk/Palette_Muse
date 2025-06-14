# 🎨 Palette Muse

**Palette Muse** is a beautifully crafted web app that helps you explore, collect, and get inspired by curated color palettes. Perfect for designers, developers, and creatives looking for the perfect color combination!

![Palette Muse Screenshot](https://via.placeholder.com/800x500/FFD700/000000?text=Palette+Muse+Screenshot)

---

## 🚀 Features
- 🔍 **Search** by tags, titles, descriptions, or color hex codes
- 💾 **Copy to Clipboard** on click (with visual feedback)
- 💖 **Like** your favorite palettes (persists with localStorage)
- 🖼️ **Modal** with palette details and tags
- 🔀 **Filter** by Trending, Popular, New, or Random
- 🌈 **Color Contrast** indicators for accessibility
- 📱 **Fully Responsive** design for all devices

---

## 📁 Project Structure

```txt
palette-muse/
├── index.html       # Main HTML layout
├── style.css        # Responsive styling and animations
├── script.js        # Palette logic, filtering, search
├── assets/          # Images and icons
└── README.md        # Project documentation
```

---
## 🛠️ Built With
- HTML5 + CSS3 + Vanilla JavaScript (ES6)
- Font Awesome Icons
- Google Fonts: Playfair Display + Space Grotesk
- Modern CSS: Grid, Flexbox, and CSS Variables

---
## 🧪 How to Run

```bash
git clone https://github.com/yourusername/palette-muse.git
cd palette-muse
```
open index.html
💡 You can also just drag index.html into your browser!

---
## ✏️ Add Your Own Palettes
In script.js, edit the palettes array:

```javascript
const palettes = [
  {
    title: "Custom Theme",
    desc: "A custom palette for your own vibe",
    colors: ["#123456", "#abcdef", "#fedcba", "#654321", "#ffcc00"],
    likes: 0,
    tags: ["custom", "cool"],
  }
  // Add more palettes here...
];
```

---
## 🙏 Credits
#### Made with ❤️ by bomdotmilk
- **Icons** by Font Awesome
- **Fonts** from Google Fonts
- **Color** algorithms inspired by Color.js
