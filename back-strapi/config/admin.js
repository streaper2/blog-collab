module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c4d2ff183d9a607e88e92a716516e8ae'),
  },
});
