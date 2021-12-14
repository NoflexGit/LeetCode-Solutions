interface INode {
  next: INode;
  value: number;
}

const getMiddleOfLinkedList = (head: INode): INode => {
  let count = 0;
  let current = head;
  let middle: number;

  while (current) {
    current = current.next;
    count++;
  }

  if (count % 2 !== 0) {
    middle = Math.ceil(count / 2);
  } else {
    middle = count / 2 + 1;
  }

  while (--middle) {
    head = head.next;
  }

  return head;
};
export default getMiddleOfLinkedList;
