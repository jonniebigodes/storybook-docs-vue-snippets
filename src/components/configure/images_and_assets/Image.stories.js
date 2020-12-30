import imageFile from "./static/image_1.jpg";

export default {
  title: "Configure/Integrations/Images-and-assets/img"
};

const image = {
  src: imageFile,
  alt: "my image"
};

export const withAnImage = () => ({
  template: `<img :src="src" :alt="alt"/>`,
  props: {
    src: {
      default: () => image.src
    },
    alt: {
      default: () => image.alt
    }
  }
});

export const withAnotherImage = () => ({
  template: '<img src="image_3.jpg" alt="my image" />'
});

export const withCDNImage = () => ({
  template: '<img src="https://placehold.it/350x150" alt="My CDN placeholder"/>'
});
