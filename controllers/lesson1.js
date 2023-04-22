const sarahRoute = (req, res) => {
    res.send('Sarah Robker');
};

const zachRoute = (req, res) => {
    res.send('Zach Robker');
};

module.exports = {
    sarahRoute,
    zachRoute
};