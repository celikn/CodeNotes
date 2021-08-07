# Unpacking values from the list 
colors = ['cyan', 'magenta', 'yellow', 'black']
# Use of asterisk for unpacking the rest 
red, blue, *other = colors
print(red)
print(blue)
print(other)
