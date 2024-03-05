import React from 'react';

// Composant pour marquer les jours spécifiques
const CustomDayMarker = ({ date }) => (
  <div style={{ backgroundColor: 'green', borderRadius: '50%', width: '10px', height: '10px' }}></div>
);

// Fonction pour déterminer le contenu des tuiles
function tileContent({ date }) {
  // Mettez en œuvre votre logique ici pour décider quels jours à marquer
  // Par exemple, marquer tous les jours de la semaine du 1er au 7 mars
  const startDate = new Date(2024, 2, 1); // 1er mars 2024
  const endDate = new Date(2024, 2, 7); // 7 mars 2024
  if (date >= startDate && date <= endDate) {
    return <CustomDayMarker date={date} />;
  }
}

export default tileContent;
