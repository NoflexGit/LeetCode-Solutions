const getDecimalValue = (head): number => {
  const arr = [];

  while (head !== null) {
    arr.push(head.value.toString());
    head = head.next;
  }

  const str = arr.join('');
  return parseInt(str, 2);
};

export default getDecimalValue;
