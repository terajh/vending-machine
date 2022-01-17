export const transBills = (bills, change) => {
  let curChange = change;
  return bills
    .sort((a, b) => {
      return b.won - a.won;
    })
    .map(item => {
      if (curChange > 0 && curChange >= item.won) {
        const result = {
          won: item.won,
          count: item.count + parseInt(curChange / item.won),
        };
        curChange -= item.won * parseInt(curChange / item.won);
        return result;
      } else return item;
    });
};
