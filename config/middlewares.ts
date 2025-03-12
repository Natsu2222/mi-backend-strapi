export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": ["'self'", "data:", "blob:", "https://res.cloudinary.com/"],
          "media-src": ["'self'", "data:", "blob:"],
          upgradeInsecureRequests: null,
        },
      },
    },
  },

  {
    name: "strapi::cors",
    config: {
      origin: ["https://shrimpstore.vercel.app/", "http://localhost:3000"], // Añade los dominios de tu frontend
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
      headers: ["Content-Type", "Authorization"],
      credentials: true,
    },
  },

  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
