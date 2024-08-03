{
    "version": 2,
    "builds": [
      {
        "src": "frontend/package.json",
        "use": "@vercel/static-build",
        "config": {
          "distDir": "frontend/build"
        }
      },
      {
        "src": "backend/package.json",
        "use": "@vercel/node"
      }
    ],
    "routes": [
      {
        "src": "/api/(.*)",
        "dest": "/backend/src/index.js"
      },
      {
        "src": "/(.*)",
        "dest": "/frontend/build/$1"
      }
    ]
  }
  