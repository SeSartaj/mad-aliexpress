module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '343d82a017e5b0bfbf11377ee289dc82'),
  },
});
