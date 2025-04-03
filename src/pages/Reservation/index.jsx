import { useState } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import styles from './Reservation.module.css';

const timeSlots = [
  { id: 1, time: '8:30 - 10:30', value: '8:30-10:30' },
  { id: 2, time: '10:30 - 13:30', value: '10:30-13:30' },
  { id: 3, time: '13:30 - 15:30', value: '13:30-15:30' },
  { id: 4, time: '15:30 - 17:30', value: '15:30-17:30' },
];

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    status: '',
    space: '',
    event: '',
    description: '',
    date: new Date(),
    timeSlot: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDateChange = (date) => {
    setFormData(prev => ({
      ...prev,
      date: date
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

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
        <h1 className={styles.title}>
          <span className={styles.reserver}>RESERVER</span>
          <span className={styles.espace}>ESPACE</span>
        </h1>

        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formLeft}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Nom</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Votre nom"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Votre email"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone">Téléphone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Votre numéro de téléphone"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="status">Status</label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">--choisir un status--</option>
                  <option value="stagiaire">Stagiaire</option>
                  <option value="formateur">Formateur</option>
                  <option value="externe">Externe</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="space">Espaces</label>
                <select
                  id="space"
                  name="space"
                  value={formData.space}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">--choisir une espace--</option>
                  <option value="bibliotheque">Bibliothèque Moderne</option>
                  <option value="conference">Salle de Conférence</option>
                  <option value="creatif">Espace Créatif</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="event">Événement</label>
                <input
                  type="text"
                  id="event"
                  name="event"
                  value={formData.event}
                  onChange={handleInputChange}
                  placeholder="Nom de l'événement"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Description de l'événement..."
                  required
                />
              </div>
            </div>

            <div className={styles.formRight}>
              <div className={styles.datePickerContainer}>
                <label>Sélectionner une date</label>
                <DatePicker
                  selected={formData.date}
                  onChange={handleDateChange}
                  dateFormat="dd/MM/yyyy"
                  minDate={new Date()}
                  className={styles.datePicker}
                />
              </div>

              <div className={styles.timeSlots}>
                <label>Sélectionner un créneau horaire</label>
                <div className={styles.timeSlotsGrid}>
                  {timeSlots.map(slot => (
                    <button
                      key={slot.id}
                      type="button"
                      className={`${styles.timeSlot} ${formData.timeSlot === slot.value ? styles.selected : ''}`}
                      onClick={() => setFormData(prev => ({ ...prev, timeSlot: slot.value }))}
                    >
                      {slot.time}
                    </button>
                  ))}
                </div>
              </div>

              <button type="submit" className={styles.submitBtn}>
                Reserver
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Reservation;
