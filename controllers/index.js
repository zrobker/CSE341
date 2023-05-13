const sarahRoute = (req, res) => {
    res.send('Sarah Robker');
};

const zachRoute = (req, res) => {
    res.send('Zach Robker');
};

// const week2Route = (req, res) => {
//     res.json('', {root: __dirname});
// };

const mongodb = require('../db/connect');

const getData = async (req, res, next) => {
  const result = await mongodb.getDb().db().collection('user').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]); // we just need the first one (the only one)
  });
};

module.exports = {
    sarahRoute,
    zachRoute,
    getData
};
