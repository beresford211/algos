my_list     = [3, 4, 6, 10, 11, 15]
alices_list = [1, 5, 8, 12, 14, 19]

# prints [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]

def merge_lists(list1, list2):
  p1 = 0
  p2 = 0
  l1Len = len(list1)
  l2Len = len(list2)
  new_list = list()

  while p1 < l1Len or p2 < l2Len:
      piece1 = list1[p1] if p1 < l1Len else float("inf")
      piece2 = list2[p2] if p2 < l2Len else float("inf")
      next_move = min(piece1, piece2)

      if next_move is piece1 and next_move is not float("inf"):
        new_list.append(next_move)
        p1 += 1
      elif next_move is piece2 and next_move is not float("inf"):
        new_list.append(next_move)
        p2 += 1

  return new_list

print merge_lists(my_list, alices_list)


