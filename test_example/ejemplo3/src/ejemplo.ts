export function processLogsX(logs: string[], threshold: number) {
  if (!Number(threshold) || threshold < 1) {
    throw new Error("Error...");
  }

  if (!logs || logs.length < 1 || !Array.isArray(logs)) {
    throw new Error("Error...");
  }

  const firstIDCount = {};
  const finalCountResult = [];

  for (const log of logs) {
    const [sender_user_id, recipient_user_id, amount_of_transactions] =
      log.split(" ");

    if (!sender_user_id || !recipient_user_id || !amount_of_transactions) {
      throw new Error();
    }

    if (
      !Number(sender_user_id) ||
      !Number(recipient_user_id) ||
      !Number(amount_of_transactions)
    )
      throw new Error("Error...");

    if (
      sender_user_id.startsWith("0") ||
      recipient_user_id.startsWith("0") ||
      amount_of_transactions.startsWith("0")
    ) {
      throw new Error("Error...");
    }

    if (sender_user_id === recipient_user_id) {
      firstIDCount[recipient_user_id] =
        (firstIDCount[recipient_user_id] || 0) - 1;
    }

    firstIDCount[sender_user_id] = (firstIDCount[sender_user_id] || 0) + 1;
    firstIDCount[recipient_user_id] =
      (firstIDCount[recipient_user_id] || 0) + 1;
  }

  for (const [key, value] of Object.entries(firstIDCount)) {
    //@ts-ignore
    if (value >= threshold) {
      finalCountResult.push({
        id: key,
        count: value,
      });
    }
  }

  return finalCountResult.map(({ id, count }) => id);
}
