import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "./Spaces.module.css";

const spaces = [
  {
    id: 1,
    title: "Bibliothèque Moderne",
    description:
      "Un espace calme et inspirant pour la lecture et l'étude, équipé de ressources multimédias modernes.",
    image: "/images/espace1.png",
  },
  {
    id: 2,
    title: "Salle de Conférence",
    description:
      "Salle polyvalente équipée de matériel audiovisuel pour vos présentations et événements.",
    image: "/images/espace2.png",
  },
  {
    id: 3,
    title: "Espace Créatif",
    description:
      "Un environnement stimulant pour les activités créatives et collaboratives.",
    image: "/images/espace3.png",
  },
  {
    id: 4,
    title: "Espace Créatif",
    description:
      "Un environnement stimulant pour les activités créatives et collaboratives.",
    image: "/images/espace4.png",
  },
  {
    id: 5,
    title: "Espace Créatif",
    description:
      "Un environnement stimulant pour les activités créatives et collaboratives.",
    image: "/images/espace5.png",
  },
];

const Spaces = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src="/images/logo.png" alt="CMC Logo" />
        </div>
        <nav className={styles.nav}>
          <Link to="/">ACCUEIL</Link>
          <Link to="/explorer">ESPACES</Link>
          <Link to="/contact">CONTACT</Link>
          <Link to="/cmc">CMC</Link>
          <div className={styles.contact}>
            <span>+62 485 76 48 52</span>
          </div>
        </nav>
      </header>

      <main className={styles.main}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.nos}>NOS</span>
          <span className={styles.espaces}>ESPACES</span>
        </motion.h1>

        <div className={styles.spacesGrid}>
          {spaces.map((space, index) => (
            <motion.div
              key={space.id}
              className={styles.spaceCard}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className={styles.imageContainer}>
                <img src={space.image} alt={space.title} />
              </div>
              <div className={styles.content}>
                <h2>{space.title}</h2>
                <p>{space.description}</p>
                <Link
                  to={`/reserver/${space.id}`}
                  className={styles.reserveBtn}
                >
                  Reserver
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Spaces;
