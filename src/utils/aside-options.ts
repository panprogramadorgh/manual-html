import { AsideOption } from "./definitions";

const asideOptions: { [key: string]: AsideOption } = {
  manual: {
    header: true,
    label: "Manual",
  },
  "sobre-manual": {
    label: "Sobre el manual",
  },
  "desarrollo-manual": {
    label: "Desarrollo del manual",
  },
  "introduccion-html5": {
    header: true,
    label: "Introduccion",
  },
  "lenguaje-html": {
    label: "Lenguaje HTML",
  },
  "historia-html": {
    label: "Historia de HTML",
  },
};

export default asideOptions;
