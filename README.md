This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

This Next.js is built based on Next.js 14 where the tutorial video can be referred from [`here`](https://www.youtube.com/playlist?list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:9998](http://localhost:9998) with your browser to see the result.

The port number can be referred from package.json.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!


## Routing Navigation - Refer [`here`](https://www.youtube.com/watch?v=Tpo5wBuk3po&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=13&t=29s&pp=iAQB)

Each page route is defined based on **page.tsx** in a specific folder, for example:
- src/app: Here the URL will be localhost:9999
- src/app/view/Login: Here the URL will be localhost:9999/view/Login
.... and so on

--- app


    |- page.tsx -> The root directory where the url is 


    |- View 

       |-- Login

          |- page.tsx -> here is the page where url is determine as localhost:9998/View/Login ('Login' is recognised by filename of Login.tsx)

          |- Login.tsx



If you want to hide the folder **view** from url so that the url will be localhost:9998/login instead of localhost:9998/view/login:

- just change the name of folder **view** to **(view)** which just adding brackets to the name of folder

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
