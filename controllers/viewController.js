exports.getOverview = (req, res) => {
  res.status(200).render('overview', {
    title: 'All Tours',
    tours: 'The Forest Hiker',
    users: 'Muideen Popoola',
  });
};

exports.getTour = (req, res) => {
  res.status(200).render('tour', {
    title: 'The Forest Hiker',
    tours: 'The Forest Hiker',
    users: 'Muideen Popoola',
  });
};
