interface ListNode {
  value: number;
  next: ListNode | null;
}

const swapPairs = (head: ListNode | null): ListNode | null => {
  if (!head || !head.next) return head;
  let current = head;

  while (current !== null && current.next != null) {

    // Swapping the data
    const temp = current.value;
    current.value = current.next.value;
    current.next.value = temp;
    current = current.next.next;
  }

  return head;
};

export default swapPairs;
