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
  "estructura-html": {
    header: true,
    label: "Estructura de HTML",
  },
  "estructura-etiquetas": {
    label: "Estructura etiquetas"
  },
  "estructura-documentos": {
    label: "Estructura documentos"
  },
  "atributos-etiquetas": {
    label: "Estructura atributos"
  },
  metadatos: {
    header: true,
    label: "Metadatos",
  },
  "que-son-metadatos": {
    label: "Proposito",
  },
  "etiquetas-metadatos": {
    label: "Etiquetas metadatos",
  },
  etiquetas: {
    header: true,
    label: "Etiquetas",
  },
  "etiquetas-bloque": {
    label: "Etiquetas bloque",
  },
};

export default asideOptions;
