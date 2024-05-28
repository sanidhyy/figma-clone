<a name="readme-top"></a>

# A minimalist Figma clone using Fabric.js and Liveblocks for real-time collaboration.

![A minimalist Figma clone using Fabric.js and Liveblocks for real-time collaboration.](/.github/images/img_main.png "A minimalist Figma clone using Fabric.js and Liveblocks for real-time collaboration.")

[![Ask Me Anything!](https://flat.badgen.net/static/Ask%20me/anything?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy "Ask Me Anything!")
[![GitHub license](https://flat.badgen.net/github/license/sanidhyy/figma-clone?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/figma-clone/blob/main/LICENSE "GitHub license")
[![Maintenance](https://flat.badgen.net/static/Maintained/yes?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/figma-clone/commits/main "Maintenance")
[![GitHub branches](https://flat.badgen.net/github/branches/sanidhyy/figma-clone?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/figma-clone/branches "GitHub branches")
[![Github commits](https://flat.badgen.net/github/commits/sanidhyy/figma-clone?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/figma-clone/commits "Github commits")
[![GitHub issues](https://flat.badgen.net/github/issues/sanidhyy/figma-clone?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/figma-clone/issues "GitHub issues")
[![GitHub pull requests](https://flat.badgen.net/github/prs/sanidhyy/figma-clone?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/figma-clone/pulls "GitHub pull requests")
[![Netlify Status](https://api.netlify.com/api/v1/badges/5dc30440-a2b3-47d8-80cc-b964bf94d6a2/deploy-status)](https://clone-figmaa.netlify.app/ "Netlify Status")

<!-- Table of Contents -->
<details>

<summary>

# :notebook_with_decorative_cover: Table of Contents

</summary>

- [Folder Structure](#bangbang-folder-structure)
- [Getting Started](#toolbox-getting-started)
- [Screenshots](#camera-screenshots)
- [Tech Stack](#gear-tech-stack)
- [Stats](#wrench-stats)
- [Contribute](#raised_hands-contribute)
- [Acknowledgements](#gem-acknowledgements)
- [Buy Me a Coffee](#coffee-buy-me-a-coffee)
- [Follow Me](#rocket-follow-me)
- [Learn More](#books-learn-more)
- [Deploy on Netlify](#page_with_curl-deploy-on-netlify)
- [Give A Star](#star-give-a-star)
- [Star History](#star2-star-history)
- [Give A Star](#star-give-a-star)

</details>

## :bangbang: Folder Structure

Here is the folder structure of this app.

```bash
figma-clone/
  |- app/
    |-- app.tsx
    |-- apple-icon.png
    |-- favicon.ico
    |-- globals.css
    |-- icon1.png
    |-- icon2.png
    |-- layout.tsx
    |-- page.tsx
    |-- room.tsx
  |- components/
    |-- comments/
    |-- cursor/
    |-- reaction/
    |-- settings/
    |-- ui/
    |-- users/
    |-- left-sidebar.tsx
    |-- live.tsx
    |-- loader.tsx
    |-- navbar.tsx
    |-- right-sidebar.tsx
    |-- shapes-menu.tsx
  |- config/
    |-- index.ts
  |- constants/
    |-- index.ts
  |- hooks/
    |-- use-interval.ts
  |- lib/
    |-- canvas.ts
    |-- key-events.ts
    |-- shapes.ts
    |-- use-max-zindex.ts
    |-- utils.ts
  |- public/
  |- scripts/
    |-- prod.ts
    |-- reset.ts
    |-- seed.ts
  |- store/
    |-- use-exit-modal.ts
    |-- use-hearts-modal.ts
    |-- use-practice-modal.ts
  |- types/
    |-- declaration.d.ts
    |-- type.ts
  |- .env.local
  |- .env.example
  |- .eslintrc.js
  |- .gitignore
  |- .prettierrc.json
  |- components.json
  |- environment.d.ts
  |- liveblocks.config.ts
  |- next.config.mjs
  |- package-lock.json
  |- package.json
  |- postcss.config.js
  |- tailwind.config.ts
  |- tsconfig.json
```

<br />

## :toolbox: Getting Started

1. Make sure **Git** and **NodeJS** is installed.
2. Clone this repository to your local computer.
3. Create `.env.local` file in **root** directory.
4. Contents of `.env.local`:

```env
# .env.local

# disable next.js telemetry
NEXT_TELEMETRY_DISABLED=1

# liveblocks api key
NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=pk_dev_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

```

### 5. Set Up Liveblocks

1. **Create a Liveblocks Account**:

   - If you don't have a Liveblocks account, sign up at [Liveblocks](https://liveblocks.io/).

2. **Create a New Project**:
   - After logging in, navigate to the Liveblocks dashboard.
   - Click on "Create Project" to set up a new project for Figma-Clone.
   - Provide a name for your project and create it.

### 6. Obtain the Liveblocks Public Key

1. **Navigate to the Project Settings**:

   - In your Liveblocks dashboard, select the project you created for Figma-Clone.
   - Go to the "Settings" or "API Keys" section.

2. **Copy the Public Key**:

   - You will find the "Public Key" under the API Keys section. Copy the public key that starts with `pk_dev_` and replace placeholder value in `NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY` with the copied value.

3. Save and Secure:

   - Save the changes to the `.env.local` file.

4. Install Project Dependencies using `npm install --legacy-peer-deps` or `yarn install --legacy-peer-deps`.

5. Now app is fully configured 👍 and you can start using this app using either one of `npm run dev` or `yarn dev`.

**NOTE:** Please make sure to keep your API keys and configuration values secure and do not expose them publicly.

## :camera: Screenshots

![Modern UI/UX](/.github/images/img1.png "Modern UI/UX")

![Right Click Context Menu](/.github/images/img2.png "Right Click Context Menu")

![Fully functional Drawing Board](/.github/images/img3.png "Fully functional Drawing Board")

## :gear: Tech Stack

[![React JS](https://skillicons.dev/icons?i=react "React JS")](https://react.dev/ "React JS") [![Next JS](https://skillicons.dev/icons?i=next "Next JS")](https://nextjs.org/ "Next JS") [![Typescript](https://skillicons.dev/icons?i=ts "Typescript")](https://www.typescriptlang.org/ "Typescript") [![Tailwind CSS](https://skillicons.dev/icons?i=tailwind "Tailwind CSS")](https://tailwindcss.com/ "Tailwind CSS") [![Netlify](https://skillicons.dev/icons?i=netlify "Netlify")](https://netlify.app/ "Netlify")

## :wrench: Stats

[![Stats for Figma Clone](/.github/images/stats.svg "Stats for Figma Clone")](https://pagespeed.web.dev/analysis?url=https://clone-figmaa.netlify.app/ "Stats for Figma Clone")

## :raised_hands: Contribute

You might encounter some bugs while using this app. You are more than welcome to contribute. Just submit changes via pull request and I will review them before merging. Make sure you follow community guidelines.

## :gem: Acknowledgements

Useful resources and dependencies that are used in Figma Clone.

- [@liveblocks/client](https://www.npmjs.com/package/@liveblocks/client): ^1.12.0
- [@liveblocks/react](https://www.npmjs.com/package/@liveblocks/react): ^1.12.0
- [@liveblocks/react-comments](https://www.npmjs.com/package/@liveblocks/react-comments): ^1.12.0
- [@radix-ui/react-context-menu](https://www.npmjs.com/package/@radix-ui/react-context-menu): ^2.1.5
- [@radix-ui/react-dropdown-menu](https://www.npmjs.com/package/@radix-ui/react-dropdown-menu): ^2.0.6
- [@radix-ui/react-label](https://www.npmjs.com/package/@radix-ui/react-label): ^2.0.2
- [@radix-ui/react-select](https://www.npmjs.com/package/@radix-ui/react-select): ^2.0.0
- [@radix-ui/react-slot](https://www.npmjs.com/package/@radix-ui/react-slot): ^1.0.2
- [class-variance-authority](https://www.npmjs.com/package/class-variance-authority): ^0.7.0
- [clsx](https://www.npmjs.com/package/clsx): ^2.1.1
- [fabric](https://www.npmjs.com/package/fabric): ^5.3.0
- [jspdf](https://www.npmjs.com/package/jspdf): ^2.5.1
- [lucide-react](https://www.npmjs.com/package/lucide-react): ^0.379.0
- [next](https://www.npmjs.com/package/next): 14.2.3
- [react](https://www.npmjs.com/package/react): ^18
- [react-dom](https://www.npmjs.com/package/react-dom): ^18
- [tailwind-merge](https://www.npmjs.com/package/tailwind-merge): ^2.3.0
- [tailwindcss-animate](https://www.npmjs.com/package/tailwindcss-animate): ^1.0.7
- [uuid](https://www.npmjs.com/package/uuid): ^9.0.1
- [@types/fabric](https://www.npmjs.com/package/@types/fabric): ^5.3.7
- [@types/node](https://www.npmjs.com/package/@types/node): ^20
- [@types/react](https://www.npmjs.com/package/@types/react): ^18
- [@types/react-dom](https://www.npmjs.com/package/@types/react-dom): ^18
- [@types/uuid](https://www.npmjs.com/package/@types/uuid): ^9.0.8
- [eslint](https://www.npmjs.com/package/eslint): ^8
- [eslint-config-next](https://www.npmjs.com/package/eslint-config-next): 14.2.3
- [postcss](https://www.npmjs.com/package/postcss): ^8
- [tailwindcss](https://www.npmjs.com/package/tailwindcss): ^3.4.1
- [typescript](https://www.npmjs.com/package/typescript): ^5

## :coffee: Buy Me a Coffee

[<img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black" width="200" />](https://www.buymeacoffee.com/sanidhy "Buy me a Coffee")

## :rocket: Follow Me

[![Follow Me](https://img.shields.io/github/followers/sanidhyy?style=social&label=Follow&maxAge=2592000)](https://github.com/sanidhyy "Follow Me")
[![Tweet about this project](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2FTechnicalShubam)](https://twitter.com/intent/tweet?text=Check+out+this+amazing+app:&url=https%3A%2F%2Fgithub.com%2Fsanidhyy%2Ffigma-clone "Tweet about this project")
[![Subscribe to my YouTube Channel](https://img.shields.io/youtube/channel/subscribers/UCNAz_hUVBG2ZUN8TVm0bmYw)](https://www.youtube.com/@OPGAMER./?sub_confirmation=1 "Subscribe to my YouTube Channel")

## :books: Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## :page_with_curl: Deploy on Netlify

The simplest way to deploy your React.js app is to use the [Netlify Platform](https://app.netlify.com/start) - a powerful platform for modern web projects.

Explore the [Netlify deployment documentation](https://docs.netlify.com/site-deploys/create-deploys) for step-by-step instructions on deploying your React.js app on Netlify.

Happy coding, and feel free to share your thoughts and improvements with the [Netlify community](https://community.netlify.com)!

## :star: Give A Star

You can also give this repository a star to show more people and they can use this repository.

## :star2: Star History

<a href="https://star-history.com/#sanidhyy/figma-clone&Timeline">
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=sanidhyy/figma-clone&type=Timeline&theme=dark" />
  <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=sanidhyy/figma-clone&type=Timeline" />
  <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=sanidhyy/figma-clone&type=Timeline" />
</picture>
</a>

<br />
<p align="right">(<a href="#readme-top">back to top</a>)</p>
