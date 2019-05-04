module.exports = {
  entryPoint: (req, res) => {
    res.status(200);
    res.json({
      status: 'success',
      message: 'API is up and running',
    });
  },
};
