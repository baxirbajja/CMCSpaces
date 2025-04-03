import { useState } from 'react';
import AdminLayout from '../../../components/AdminLayout';
import SpaceForm from '../../../components/SpaceForm';
import styles from './SpacesManagement.module.css';

const SpacesManagement = () => {
  const [spaces, setSpaces] = useState([
    {
      id: 1,
      title: 'Bibliothèque Moderne',
      description: 'Un espace calme et inspirant pour la lecture et l\'étude.',
      capacity: 50,
      status: 'active',
      image: '/images/espace1.png'
    },
    {
      id: 2,
      title: 'Salle de Conférence',
      description: 'Salle polyvalente équipée de matériel audiovisuel.',
      capacity: 100,
      status: 'maintenance',
      image: '/images/espace2.png'
    },
    {
      id: 3,
      title: 'Espace Créatif',
      description: 'Un environnement stimulant pour les activités créatives.',
      capacity: 30,
      status: 'active',
      image: '/images/espace3.png'
    }
  ]);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedSpace, setSelectedSpace] = useState(null);

  const handleStatusChange = (id, newStatus) => {
    setSpaces(spaces.map(space => 
      space.id === id ? { ...space, status: newStatus } : space
    ));
  };

  const handleAddSpace = (spaceData) => {
    const newSpace = {
      ...spaceData,
      id: spaces.length + 1
    };
    setSpaces([...spaces, newSpace]);
  };

  const handleEditSpace = (spaceData) => {
    setSpaces(spaces.map(space => 
      space.id === spaceData.id ? { ...spaceData } : space
    ));
  };

  const handleDeleteSpace = (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet espace ?')) {
      setSpaces(spaces.filter(space => space.id !== id));
    }
  };

  const openAddForm = () => {
    setSelectedSpace(null);
    setIsFormOpen(true);
  };

  const openEditForm = (space) => {
    setSelectedSpace(space);
    setIsFormOpen(true);
  };

  return (
    <AdminLayout>
      <div className={styles.container}>
        <div className={styles.header}>
          <button className={styles.addButton} onClick={openAddForm}>
            <i className="fas fa-plus"></i>
            Ajouter un Espace
          </button>
        </div>

        <div className={styles.spacesGrid}>
          {spaces.map(space => (
            <div key={space.id} className={styles.spaceCard}>
              <div className={styles.imageContainer}>
                <img src={space.image} alt={space.title} />
                <span className={`${styles.status} ${styles[space.status]}`}>
                  {space.status === 'active' ? 'Actif' : 'En maintenance'}
                </span>
              </div>
              <div className={styles.content}>
                <h2>{space.title}</h2>
                <p className={styles.description}>{space.description}</p>
                <div className={styles.details}>
                  <span>
                    <i className="fas fa-users"></i>
                    Capacité: {space.capacity}
                  </span>
                </div>
                <div className={styles.actions}>
                  <button 
                    className={styles.editButton}
                    onClick={() => openEditForm(space)}
                  >
                    <i className="fas fa-edit"></i>
                    Modifier
                  </button>
                  <button 
                    className={styles.statusButton}
                    onClick={() => handleStatusChange(space.id, 
                      space.status === 'active' ? 'maintenance' : 'active'
                    )}
                  >
                    <i className={`fas fa-${space.status === 'active' ? 'tools' : 'check'}`}></i>
                    {space.status === 'active' ? 'Maintenance' : 'Activer'}
                  </button>
                  <button 
                    className={styles.deleteButton}
                    onClick={() => handleDeleteSpace(space.id)}
                  >
                    <i className="fas fa-trash"></i>
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <SpaceForm
          space={selectedSpace}
          isOpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          onSubmit={selectedSpace ? handleEditSpace : handleAddSpace}
        />
      </div>
    </AdminLayout>
  );
};

export default SpacesManagement;
