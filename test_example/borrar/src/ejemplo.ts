export function processLogsX(logs: string[], threshold: number){
    if(!Number(threshold) && threshold < 1 ) {
        throw new Error()
    }

    if(!logs && logs.length < 1 || !Array.isArray(logs)) {
        throw new Error()
    }

    const firstIDCount = {};
    const secondIDCount = {};
    const finalCountResult = []

    for (const log of logs) {
        const [sender_user_id, recipient_user_id, amount_of_transactions] = log.split(" ");
        console.log(sender_user_id, recipient_user_id, amount_of_transactions);
        firstIDCount[sender_user_id] = (firstIDCount[sender_user_id] || 0) + 1;
        secondIDCount[recipient_user_id] = (secondIDCount[recipient_user_id] || 0) + 1;
    }

    for (const [key, value] of Object.entries(firstIDCount)) {
        //@ts-ignore
        if (value >= threshold) {
            finalCountResult.push({
                id: key,
                count: value
            });
        }
    }

    for (const [key, value] of Object.entries(secondIDCount)) {
        //@ts-ignore
        if (value >= threshold) {
            finalCountResult.push({
                id: key,
                count: value
            });
        }
    }

    return finalCountResult.map(({id, count}) => id);
}

const result = processLogsX(["1 2 50","1 7 70", "1 3 20", "2 2 17"],2)
