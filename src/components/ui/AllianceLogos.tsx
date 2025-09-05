// src/components/ui/AllianceLogos.tsx
import { motion } from 'framer-motion';

const logos = [
  { name: 'CISCO', path: '/logos/cisco.svg' },
  { name: 'IBM', path: '/logos/ibm.svg' },
  { name: 'NOZOMI NETWORKS', path: '/logos/nozomi.svg' },
  { name: 'GEMMB', path: '/logos/gemmb.svg' },
  { name: 'OBRELA', path: '/logos/obrela.svg' },
  { name: 'RADAR', path: '/logos/radar.svg' },
  { name: 'ENCODE', path: '/logos/encode.svg' },
  { name: 'METRICSTREAM', path: '/logos/metricstream.svg' },
];

const placeholderSvg = (name: string) => `
<svg width="150" height="60" viewBox="0 0 150 60" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#1a202c"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="12" fill="white" font-weight="bold">${name}</text>
</svg>
`;

const AllianceLogos = () => {
    return (
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 items-center justify-center">
            {logos.map((logo, index) => (
                <motion.div
                    key={logo.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                    title={logo.name}
                >
                    {/* Use inline SVG as placeholder. Replace with actual <Image /> component if you have the logos */}
                    <div dangerouslySetInnerHTML={{ __html: placeholderSvg(logo.name) }} />
                </motion.div>
            ))}
        </div>
    );
}

export default AllianceLogos;