(() => {
  const celsiusTemperatures: number[] = [33.6, 12.34];

  const ipServer: string = "123.123.123.123";

  const usersData = [
    { id: 1, email: "fernando@google.com" },
    { id: 2, email: "juan@google.com" },
    { id: 3, email: "melissa@google.com" },
  ];

  const userEmails = usersData.map((user) => user.email);

  const canJump: boolean = false;
  const canRun: boolean = true;
  const hasItems: boolean = true;
  const isLoading: boolean = false;

  const initTime: number = new Date().getTime();
  const endTime = new Date().getTime() - initTime;

  function getBooks() {
    throw new Error("Function not implemented.");
  }

  function getBooksFromUrl(url: string) {
    throw new Error("Function not implemented.");
  }

  function getSquareArea(side: number) {
    throw new Error("Function not implemented.");
  }

  function printJob() {
    throw new Error("Function not implemented.");
  }
})();
