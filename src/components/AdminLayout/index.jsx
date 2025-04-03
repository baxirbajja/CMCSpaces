import { Link, useLocation } from 'react-router-dom';
import styles from './AdminLayout.module.css';

const AdminLayout = ({ children }) => {
  const location = useLocation();

  return (
    <div className={styles.adminContainer}>
      <aside className={styles.sidebar}>
        <div className={styles.logo}>
          <img src="/images/logo.png" alt="CMC Logo" />
          <h2>Admin Panel</h2>
        </div>
        <nav className={styles.nav}>
          <Link 
            to="/admin/spaces" 
            className={`${styles.navLink} ${location.pathname === '/admin/spaces' ? styles.active : ''}`}
          >
            <i className="fas fa-building"></i>
            Gestion des Espaces
          </Link>
          <Link 
            to="/admin/reservations" 
            className={`${styles.navLink} ${location.pathname === '/admin/reservations' ? styles.active : ''}`}
          >
            <i className="fas fa-calendar-check"></i>
            Gestion des Réservations
          </Link>
          <Link 
            to="/" 
            className={styles.navLink}
          >
            <i className="fas fa-home"></i>
            Retour au Site
          </Link>
        </nav>
      </aside>
      <main className={styles.mainContent}>
        <header className={styles.header}>
          <div className={styles.headerTitle}>
            <h1>
              {location.pathname === '/admin/spaces' ? 'Gestion des Espaces' : 'Gestion des Réservations'}
            </h1>
          </div>
          <div className={styles.headerActions}>
            <button className={styles.profileBtn}>
              <i className="fas fa-user"></i>
              Admin
            </button>
          </div>
        </header>
        <div className={styles.content}>
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
