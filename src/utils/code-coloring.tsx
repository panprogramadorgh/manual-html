import { ReactNode, FC } from "react";

const targetWords = {
  keywords: [
    // html tags
    "html",
    "meta",
    "head",
    "body",
    "!DOCTYPE",
    "title",
    "div",
    "span",
    "p",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "a",
    "img",
    "button",
    "input",
    "label",
    "select",
    "option",
    "textarea",
    "form",
    "ul",
    "ol",
    "li",
    "nav",
    "header",
    "footer",
    "main",
    "section",
    "article",
    "aside",
    "dialog",
    "menu",
    "menuitem",
  ],
  operators: ["+", "-", "*", "/", "%", "!==", "===", "!=", "==", "=", ">", "<"],
  // comments: ["//", "/*", "*/"],
};

// TODO: Mejorar coloreado de sintaxis:
// - Propiedades y metodos de objeto

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

    // Keywords coloring
    targetWords.keywords.forEach((keyword) => {
      const replacetokens = () => {
        const kwIndex = currentLine().indexOf(keyword);
        if (kwIndex === -1) return;
        const supportedCharacters = [...targetWords.operators, " ", undefined];
        if (!supportedCharacters.includes(currentLine()[kwIndex - 1])) return;
        if (
          !supportedCharacters.includes(currentLine()[kwIndex + keyword.length])
        )
          return;

        tokens.splice(kwIndex, keyword.length, () => (
          <span className="token keyword">{keyword}</span>
        ));
        replacetokens();
      };
      replacetokens();
    });

    // Strings value coloring
    function colorStrings() {
      let doubleQuotIndex = currentLine().indexOf('"');
      if (doubleQuotIndex === -1) return;
      let nextDoubleQuotIndex = currentLine().indexOf('"', doubleQuotIndex + 1);
      if (nextDoubleQuotIndex === -1)
        nextDoubleQuotIndex = currentLine().length - 1;

      if ([doubleQuotIndex, nextDoubleQuotIndex].includes(-1)) return;

      const word = currentLine().substring(
        doubleQuotIndex,
        nextDoubleQuotIndex + 1
      );

      tokens.splice(doubleQuotIndex, word.length, () => {
        return <span className="token value string">{word}</span>;
      });
      colorStrings();
    }
    colorStrings();

    // Operators coloring
    targetWords.operators.forEach((keyword) => {
      const replacetokens = () => {
        const kwIndex = currentLine().indexOf(keyword);
        if (kwIndex === -1) return;
        tokens.splice(kwIndex, keyword.length, () => (
          <span className="token operator">{keyword}</span>
        ));
        replacetokens();
      };
      replacetokens();
    });

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
