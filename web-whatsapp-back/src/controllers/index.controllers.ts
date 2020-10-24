export const ctrl = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  getIndex: (req, res) => {
    res.json({
      data: {
        port: process.env.PORT,
        msg: 'server is connected!',
      },
    });
  },
};
