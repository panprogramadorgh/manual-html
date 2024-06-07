import { ReactNode, FC } from "react";
import targetWords from "./target-words";

function fromStringToCode(str: string): ReactNode[] {
  const lines = str.split("\n");
  // Elimina las ultimas lineas si estan vacias
  const reversedLines = [...lines].reverse();
  for (let line of reversedLines) {
    if (line.trim() === "") lines.pop();
    else break;
  }

  const reactNodeLines = lines.map((line) => {
    let tokens: (string | FC)[] = line.split("");
    const currentLine = () => {
      return tokens
        .map((token) => {
          if (typeof token === "function") return "&";
          return token;
        })
        .join("");
    };

    // FIXME: No se colorean las etiquetas con atributos escritos en varias lineas
    const colorTags = () => {
      const regexp = new RegExp(
        "</?[a-zA-Z][a-zA-Z0-9]*\\s*[a-zA-Z0-9='\"/\\-. ]*>?"
      );

      const ocurrence = currentLine().match(regexp);
      // In case there are no more ocurrences the functions returns
      if (!ocurrence) return;
      const tagOffset = ocurrence[0][1] === "/" ? 2 : 1;
      const closingTagIndex =
        currentLine().indexOf(">", ocurrence.index) === -1
          ? currentLine().length
          : currentLine().indexOf(">", ocurrence.index);
      const spaceAfterTagNameIndex = currentLine().indexOf(
        " ",
        ocurrence.index
      );

      const tagName = currentLine().substring(
        ocurrence.index! + tagOffset,
        Math.min(
          closingTagIndex,
          spaceAfterTagNameIndex === -1
            ? closingTagIndex
            : spaceAfterTagNameIndex
        )
      );

      tokens.splice(ocurrence.index! + tagOffset, tagName.length, () => {
        return <span className="token tag">{tagName}</span>;
      });
      // Checks for more ocurrences
      colorTags();
    };

    // HTML attrs coloring
    function colorAttrs() {
      targetWords.attrs.forEach((attr) => {
        const replacetokens = () => {
          const kwIndex = currentLine().indexOf(attr);
          if (kwIndex === -1) return;
          if (
            currentLine()[kwIndex - 1] !== " " ||
            currentLine()[kwIndex + attr.length] !== "="
          )
            return;

          tokens.splice(kwIndex, attr.length, () => (
            <span className="token attr">{attr}</span>
          ));

          replacetokens();
        };
        replacetokens();
      });
    }

    // Strings value coloring
    function colorStrings() {
      let quotsIndex: { [key: string]: number } = {
        firstKindOfQuotIndex: currentLine().indexOf('"'),
        singleQuotIndex: currentLine().indexOf("'"),
      };
      quotsIndex = Object.fromEntries(
        Object.entries(quotsIndex).filter(([_, v]) => v !== -1)
      );
      let firstAnyKindOfQuotIndex: number = Math.min(
        ...Object.values(quotsIndex)
      );
      // Se retorna la funcion en caso de que no se encuentre ningun tipo de quot.
      if (firstAnyKindOfQuotIndex === Infinity) return;
      const kindOfQuot: string = currentLine()[firstAnyKindOfQuotIndex];

      let seccondAnyKindOfQuotIndex = currentLine().indexOf(
        kindOfQuot,
        firstAnyKindOfQuotIndex + 1
      );
      // En caso de que no haya segundo quot de cualquier tipo, se asume que termina en el final de linea.
      if (seccondAnyKindOfQuotIndex === -1)
        seccondAnyKindOfQuotIndex = currentLine().length - 1;

      const word = currentLine().substring(
        firstAnyKindOfQuotIndex,
        seccondAnyKindOfQuotIndex + 1
      );

      tokens.splice(firstAnyKindOfQuotIndex, word.length, () => {
        return <span className="token value string">{word}</span>;
      });
      colorStrings();
    }

    // Operators coloring
    const colorSymbols = () => {
      targetWords.symbols.forEach((symbol) => {
        const replacetokens = () => {
          const kwIndex = currentLine().indexOf(symbol);
          if (kwIndex === -1) return;
          tokens.splice(kwIndex, symbol.length, () => (
            <span className="token symbol">{symbol}</span>
          ));
          replacetokens();
        };
        replacetokens();
      });
    };

    // Ejecutando en el orden deseado todas las funciones que alteraran la matriz de tokens
    [colorTags, colorAttrs, colorStrings, colorSymbols].forEach((fn) => fn());

    const reactNodeLine = (
      <>
        {tokens.map((Token, index) => {
          // Si Token es una funcion quere decir que es una palabra, signo, etc y por lo tanto es un componente a ser renderizado.
          if (typeof Token === "function") return <Token key={index} />;
          // De lo contrario es un simple espacio o caracter
          else if (typeof Token === "string" && Token === " ") {
            return (
              <span key={index} className="token blank">
                &nbsp;
              </span>
            );
          }
          return (
            <span key={index} className="token char">
              {Token}
            </span>
          );
        })}
      </>
    );
    return reactNodeLine;
  });

  return reactNodeLines;
}

export default fromStringToCode;
