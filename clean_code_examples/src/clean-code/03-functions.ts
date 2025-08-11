(() => {
  function getMovieById(movieId: string) {
    console.debug({ movieId });
  }

  function getActorsByMovieId(movieId: string) {
    console.debug({ movieId });
  }

  function getActorBioById(actorId: string) {
    console.debug({ actorId });
  }

  interface Movie {
    title: string;
    description: string;
    rating: number;
    cast: string[];
  }

  function createMovie({ cast, description, rating, title }: Movie) {
    console.debug({ cast, description, rating, title });
  }

  function validateFullName(fullName: string): boolean {
    return fullName.length > 3;
  }

  function createActor(fullName: string, birthdate: Date): boolean {
    if (validateFullName(fullName)) return false;

    console.debug("Create actor: ", birthdate);
    return true;
  }

  const getPayAmount = ({
    isDead = false,
    isSeparated = true,
    isRetired = false,
  }): number => {
    if (isDead) return 1500;

    if (isSeparated) return 2500;

    return isRetired ? 3000 : 4000;
  };
})();
