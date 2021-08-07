a[-1]    # last item in the array
a[-2:]   # last two items in the array
a[:-2]   # everything except the last two items

a[::-1]    # all items in the array, reversed
a[1::-1]   # the first two items, reversed
a[:-3:-1]  # the last two items, reversed
a[-3::-1]  # everything except the last two items, reversed

#Create list from 1-9
A = list(range(1, 10, 1)) # Start, stop, and step
B = list(range(9))

print("This is List A:", A)
print("This is List B:", B)
