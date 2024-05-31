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
    let currentLine = () => {
      return tokens
        .map((token) => {
          if (typeof token === "function") return " ";
          return token;
        })
        .join("");
    };

    // tags coloring
    const colorTags = () => {
      targetWords.tags.forEach((tag) => {
        const replacetokens = () => {
          const kwIndex = currentLine().indexOf(tag);
          if (kwIndex === -1) return;
          const tagPrefix = ["/", "<"];
          const tagSubfix = [" ", ">"];
          if (!tagPrefix.includes(currentLine()[kwIndex - 1])) return;
          if (!tagSubfix.includes(currentLine()[kwIndex + tag.length])) return;

          tokens.splice(kwIndex, tag.length, () => (
            <span className="token tag">{tag}</span>
          ));

          replacetokens();
        };
        replacetokens();
      });
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
    [colorStrings, colorTags, colorAttrs, colorSymbols].forEach((fn) => fn());

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
