export const colors = {
  black: "#000",
  white: "#fff",
  orange: "#F28724",
};

export const fonts = {
  nunito: `'Nunito Sans', sans-serif;`,
};

export const mixins = {
  resetList: `
      list-style: none;
      padding: 0;
      margin: 0;
    `,
  resetLink: `
      text-decoration: none;
    `,

  imageCover: `
    width: 100%;
    height: 100%;
    object-fit: cover;
    `,

  resetGlobal: `
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    `,
};
