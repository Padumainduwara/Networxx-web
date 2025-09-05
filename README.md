# NETWORXX - 3D Interactive Cybersecurity Website

![NETWORXX Company Logo](public/company-logo.png)

NETWORXX යනු නවීන Managed Services සහ Cyber Security විසඳුම් සපයන ආයතනයක් සඳහා නිර්මාණය කරන ලද, අති නවීන සහ අන්තර්ක්‍රියාකාරී (interactive) ත්‍රිමාණ (3D) වෙබ් අඩවියකි. මෙම ව්‍යාපෘතිය **Next.js**, **React Three Fiber (R3F)**, සහ **GSAP** වැනි ප්‍රබල තාක්ෂණයන් භාවිතා කරමින්, පරිශීලකයාට පිටුව scroll කිරීම හරහා පාලනය කළ හැකි අද්විතීය ත්‍රිමාණ අත්දැකීමක් ලබා දෙයි.

**[🌐 සජීවී ආදර්ශනය (Live Demo) වෙත පිවිසෙන්න](https://your-live-demo-url.com)** <br>

## ✨ ප්‍රධාන විශේෂාංග (Key Features)

* **අන්තර්ක්‍රියාකාරී ත්‍රිමාණ පසුබිම (Interactive 3D Scene):** `React Three Fiber` සහ `Three.js` යොදාගෙන නිර්මාණය කර ඇති, පරිශීලකයාගේ මූසික (mouse) චලනයන්ට සහ scroll කිරීමට ප්‍රතිචාර දක්වන ගතික "Digital Fortress" නම් ත්‍රිමාණ දර්ශනයක්.
* **Scroll-Driven Animations:** `GSAP (GreenSock Animation Platform)` සහ `ScrollTrigger` භාවිතයෙන්, පරිශීලකයා වෙබ් පිටුව පහළට scroll කරන විට විවිධ කොටස් (sections) සුමටව දර්ශනය වීම සහ අතුරුදහන් වීම පාලනය කරයි.
* **සුමට Scroll අත්දැකීම (Smooth Scrolling):** `@studio-freight/lenis` library එක මගින් ලබා දෙන, ඉතා සුමට සහ ස්වාභාවික scroll අත්දැකීමක්.
* **නවීන සහ ප්‍රතිචාරාත්මක UI/UX (Modern & Responsive UI/UX):** `Tailwind CSS` භාවිතයෙන් නිර්මාණය කරන ලද, ඕනෑම තිරයකට (desktop, tablet, mobile) ගැලපෙන, පිරිසිදු සහ නවීන පෙනුමක් සහිත user interface එකක්.
* **Reusable Components:** Header, Footer, Service Cards, Testimonials වැනි සියලුම කොටස්, වෙන වෙනම React components ලෙස නිර්මාණය කර ඇති නිසා, ව්‍යාපෘතිය නඩත්තු කිරීම සහ නැවත භාවිතය ඉතා පහසුයි.
* **Preloader සහ Custom Cursor:** වෙබ් අඩවිය load වීමට පෙර ආකර්ෂණීය preloader එකක් දර්ශනය වන අතර, පරිශීලක අත්දැකීම වැඩි දියුණු කිරීම සඳහා custom cursor එකක් ද යොදාගෙන ඇත.

<br>

## 🛠️ භාවිතා කරන ලද තාක්ෂණයන් (Technology Stack)

මෙම ව්‍යාපෘතිය ගොඩනැගීම සඳහා පහත සඳහන් ප්‍රධාන තාක්ෂණයන් සහ libraries භාවිතා කර ඇත:

* **Framework:** Next.js 15.5.2
* **UI Library:** React 19.1.0
* **3D Rendering:** React Three Fiber (R3F), React Three Drei, Three.js
* **Animation:** GSAP, Framer Motion
* **Styling:** Tailwind CSS
* **Language:** TypeScript
* **Icons:** React Icons
* **Smooth Scrolling:** Lenis

<br>

## 🚀 ආරම්භ කරන්නේ කෙසේද? (Getting Started)

මෙම ව්‍යාපෘතිය ඔබේ පරිගණකයේ ස්ථාපනය කර ක්‍රියාත්මක කරගැනීමට පහත පියවර අනුගමනය කරන්න.

### අවශ්‍යතා (Prerequisites)

* Node.js (v18.18.0 or higher)
* npm or yarn

### ස්ථාපනය (Installation)

1.  **GitHub repository එක Clone කරගන්න:**
    ```bash
    git clone [https://github.com/your-username/networxx-website.git](https://github.com/your-username/networxx-website.git)
    cd networxx-website
    ```

2.  **Dependencies Install කරගන්න:**
    ```bash
    npm install
    ```

3.  **Development Server එක Run කරන්න:**
    ```bash
    npm run dev
    ```

4.  ඔබේ browser එකෙන් [http://localhost:3000](http://localhost:3000) වෙත පිවිසෙන්න.

### Production Build

නිෂ්පාදන (production) сборка එකක් සෑදීම සඳහා පහත විධානය ක්‍රියාත්මක කරන්න:
```bash
npm run build
```

<br>

## 📁 ව්‍යාපෘති ව්‍යුහය (Project Structure)

```
.
├── public/                 # ස්ථිතික ගොනු (Images, GIFs, logos)
├── src/
│   ├── app/                # Next.js App Router (ප්‍රධාන පිටු, layout)
│   └── components/
│       ├── canvas/         # ත්‍රිමාණ (3D) Components
│       └── ui/             # UI Components (Header, Footer, Cards)
├── eslint.config.mjs       # ESLint වින්‍යාසය
├── next.config.ts          # Next.js වින්‍යාසය
├── package.json            # ව්‍යාපෘතියේ dependencies සහ scripts
└── tsconfig.json           # TypeScript වින්‍යාසය
```
