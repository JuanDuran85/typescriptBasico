type Language = "es" | "en" | "fr" | "pt";

function createGreeter(lang: Language): (name: string) => string | null {
  return (name: string): string | null => {
    const messages: Record<string, string> = {
      es: `Hola, ${name}`,
      en: `Hello, ${name}`,
      fr: `Bonjour, ${name}`,
      pt: `Ola, ${name}`,
    };

    return messages[lang] || null;
  };
}

function main() {
  const spanishGreeter: (name: string) => string | null = createGreeter("es");
  const englishGreeter: (name: string) => string | null = createGreeter("en");
  const frenchGreeter: (name: string) => string | null = createGreeter("fr");
  const portugueseGreeter: (name: string) => string | null =
    createGreeter("pt");

  console.log(spanishGreeter("Juan"));
  console.log(englishGreeter("John"));
  console.log(frenchGreeter("Jean"));
  console.log(portugueseGreeter("João"));
}

main();
