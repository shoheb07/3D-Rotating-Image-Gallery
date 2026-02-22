# 3D-Rotating-Image-Gallery
3D Rotating Image Gallery is a modern web-based visual component built using HTML, CSS, and JavaScript. It displays images arranged in a circular 3D layout and rotates them smoothly around the Y-axis. The project demonstrates the use of CSS3 transforms (rotateY, translateZ), perspective, and basic DOM interaction.
# 3D Rotating Image Gallery

A simple and interactive 3D rotating image gallery built using HTML, CSS, and JavaScript.

## 📌 Features

- 3D circular image layout
- Smooth automatic rotation
- Keyboard navigation (Left & Right arrow keys)
- Responsive center alignment
- Clean and modern UI

## 🛠️ Technologies Used

- HTML5
- CSS3 (3D Transforms & Animation)
- JavaScript (DOM Manipulation)

## 📂 Project Structure

3D-Rotating-Gallery/
│
├── index.html
├── style.css
├── script.js
└── README.md

## 🚀 How to Run

1. Download or clone the repository.
2. Open the project folder.
3. Open `index.html` in any modern browser.

No additional setup or dependencies required.

## 🎮 Controls

- Auto-rotation runs continuously.
- Press **Right Arrow (→)** to rotate forward.
- Press **Left Arrow (←)** to rotate backward.

## 📸 How It Works

Images are placed in a circular arrangement using:

transform: rotateY(angle) translateZ(distance);

Each image is rotated at equal angles (e.g., 60° for 6 images) and pushed outward using `translateZ()`.

The gallery rotates continuously using CSS animation:

@keyframes rotate {
  from { transform: rotateY(0deg); }
  to { transform: rotateY(360deg); }
}

JavaScript disables animation when manual control is used.

## 📌 Customization

- Change image URLs in `index.html`.
- Adjust rotation speed in `style.css`:
  animation: rotate 20s infinite linear;
- Modify `translateZ()` value to change circle radius.

