const ticketFilter = (ticketArray: [], rule: string) => {
  const openItems = ticketArray?.filter(
    (item: { status: string }) => item.status === rule
  );

  return openItems;
};

export default ticketFilter;
