{
    "version": 2,
    "builds": [
      {
        "src": "frontend/package.json",
        "use": "@vercel/static-build",
        "config": {
          "distDir": "frontend/build"
        }
      }
    ],
    "routes": [
      {
        "src": "/(.*)",
        "dest": "/frontend/build/$1"
      }
    ]
  }
  