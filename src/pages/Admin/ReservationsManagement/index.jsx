import { useState } from "react";
import AdminLayout from "../../../components/AdminLayout";
import styles from "./ReservationsManagement.module.css";

const ReservationsManagement = () => {
  const [reservations, setReservations] = useState([
    {
      id: 1,
      name: "Mohammed Alami",
      email: "mohammed.alami@email.com",
      space: "Bibliothèque Moderne",
      date: "2025-04-15",
      time: "8:30 - 10:30",
      status: "pending",
      event: "Session d'étude",
      description: "Session de révision pour un groupe de 10 étudiants.",
    },
    {
      id: 2,
      name: "Sara Bennani",
      email: "sara.bennani@email.com",
      space: "Salle de Conférence",
      date: "2025-04-15",
      time: "13:30 - 15:30",
      status: "approved",
      event: "Conférence Tech",
      description: "Présentation des nouvelles technologies web.",
    },
    {
      id: 3,
      name: "Karim Idrissi",
      email: "karim.idrissi@email.com",
      space: "Espace Créatif",
      date: "2025-04-17",
      time: "10:30 - 13:30",
      status: "declined",
      event: "Workshop Design",
      description: "Atelier de design thinking pour startups.",
    },
    {
      id: 4,
      name: "Yasmine Tazi",
      email: "yasmine.tazi@email.com",
      space: "Bibliothèque Moderne",
      date: "2025-04-17",
      time: "14:00 - 16:00",
      status: "pending",
      event: "Club de Lecture",
      description: "Discussion du livre du mois.",
    },
  ]);

  const handleStatusChange = (id, newStatus) => {
    setReservations(
      reservations.map((reservation) =>
        reservation.id === id
          ? { ...reservation, status: newStatus }
          : reservation
      )
    );
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "approved":
        return styles.approved;
      case "declined":
        return styles.declined;
      default:
        return styles.pending;
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "approved":
        return "Approuvée";
      case "declined":
        return "Refusée";
      default:
        return "En attente";
    }
  };

  // Group reservations by date
  const groupedReservations = reservations.reduce((groups, reservation) => {
    const date = reservation.date;
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(reservation);
    return groups;
  }, {});

  // Sort dates
  const sortedDates = Object.keys(groupedReservations).sort();

  // Format date for display
  const formatDate = (dateString) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("fr-FR", options);
  };

  return (
    <AdminLayout>
      <div className={styles.container}>
        <div className={styles.filters}>
          <div className={styles.searchBar}>
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Rechercher une réservation..." />
          </div>
          <div className={styles.statusFilters}>
            <button className={`${styles.filterBtn} ${styles.active}`}>
              Toutes
            </button>
            <button className={styles.filterBtn}>En attente</button>
            <button className={styles.filterBtn}>Approuvées</button>
            <button className={styles.filterBtn}>Refusées</button>
          </div>
        </div>

        {sortedDates.map((date) => (
          <div key={date} className={styles.dateGroup}>
            <h2 className={styles.dateTitle}>
              <i className="fas fa-calendar-day"></i>
              {formatDate(date)}
              <span className={styles.reservationCount}>
                {groupedReservations[date].length} réservation(s)
              </span>
            </h2>

            <div className={styles.reservationsGrid}>
              {groupedReservations[date].map((reservation) => (
                <div key={reservation.id} className={styles.reservationCard}>
                  <div className={styles.cardHeader}>
                    <h3>{reservation.event}</h3>
                    <span
                      className={`${styles.status} ${getStatusColor(
                        reservation.status
                      )}`}
                    >
                      {getStatusText(reservation.status)}
                    </span>
                  </div>

                  <div className={styles.cardContent}>
                    <div className={styles.info}>
                      <span>
                        <i className="fas fa-user"></i>
                        {reservation.name}
                      </span>
                      <span>
                        <i className="fas fa-envelope"></i>
                        {reservation.email}
                      </span>
                      <span>
                        <i className="fas fa-building"></i>
                        {reservation.space}
                      </span>
                      <span>
                        <i className="fas fa-clock"></i>
                        {reservation.time}
                      </span>
                    </div>
                    <p className={styles.description}>
                      {reservation.description}
                    </p>

                    <div className={styles.actions}>
                      {reservation.status === "pending" && (
                        <>
                          <button
                            className={styles.approveBtn}
                            onClick={() =>
                              handleStatusChange(reservation.id, "approved")
                            }
                          >
                            <i className="fas fa-check"></i>
                            Approuver
                          </button>
                          <button
                            className={styles.declineBtn}
                            onClick={() =>
                              handleStatusChange(reservation.id, "declined")
                            }
                          >
                            <i className="fas fa-times"></i>
                            Refuser
                          </button>
                        </>
                      )}
                      {reservation.status !== "pending" && (
                        <button
                          className={styles.resetBtn}
                          onClick={() =>
                            handleStatusChange(reservation.id, "pending")
                          }
                        >
                          <i className="fas fa-undo"></i>
                          Réinitialiser
                        </button>
                      )}
                      <button className={styles.deleteBtn}>
                        <i className="fas fa-trash"></i>
                        Supprimer
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
};

export default ReservationsManagement;
