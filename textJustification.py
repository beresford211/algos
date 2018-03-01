from collections import deque
"""
 Given an array of words and a length L, format the text such that each line has exactly L characters and is fully(left and right) justified.
 You should pack your words in a greedy approach
that is, pack as many words as you can in each line.Pad extra spaces ' ' when necessary so that each line has exactly L characters.
 Extra spaces between words should be distributed as evenly as possible.If the number of spaces on a line do not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.
 For the last line of text, it should be left justified and no extra space is inserted between words.

 For example,

 Return the formatted lines as:
 [
     "This    is    an",
     "example  of text",
     "justification.  "
     ]
 Note: Each word is guaranteed not to exceed L in length.
"""


def textJustification(words, l):
    matrix = list()
    arr = list()
    char_count = 0
    finalResult = ''

    for word in words:
        if char_count + len(word) + 1 > l:
            arr.append(char_count)
            matrix.append(arr)
            arr = list()
            char_count = len(word) + 1
            arr.append(word)

        elif char_count + len(word) + 1 < l:
            char_count += len(word) + 1
            arr.append(word)

        elif char_count + len(word) + 1 == l:
            char_count += len(word) + 1
            arr.append(word)
            arr.append(char_count)
            matrix.append(arr)
            char_count = 0
            arr = list()

    if len(arr) > 0:
        arr.append(char_count)
        matrix.append(arr)

    spaces = list()

    while(len(matrix) > 0):
        line = matrix.pop(0)
        chars_left = line.pop()
        line_len = len(line) - 1
        if line_len == 0:
            line_len += 1
        space = [' '] * line_len

        while (chars_left < l):
            addSpace = space.pop(0)
            addSpace += " "
            space.append(addSpace)
            chars_left += 1

        for word in line:
            finalResult += word
            if len(space) > 0:
                has_space = space.pop(0)
                finalResult += has_space
        finalResult += '\n'

    print finalResult


words = ["This", "is", "an", "example", "of", "text", "justification."]
lcount = 16
textJustification(words, lcount)
