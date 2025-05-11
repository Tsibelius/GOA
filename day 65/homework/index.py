# დავალება 1-ლი

# Given two strings s1 and s2. If they are opposite, return True; otherwise, return False.
# Opposite means: all letters are the same but with opposite cases (uppercase/lowercase).
# If both strings are empty, return False.

def is_opposite(s1, s2):
    if s1 == "" and s2 == "":
        return False
    elif s1.swapcase() == s2:
        return True
    else:
        return False


# დავალება მე-2

# check_alive should return True if the player's health is greater than 0,
# and False if it is 0 or below.

def check_alive(health):
    if health > 0:
        return True
    else:
        return False


# დავალება მე-3

# The function takes a string and a character as input.
# It returns how many times the character appears in the string.

def count_char_occurrences(text, char):
    count = 0
    for c in text:
        if c == char:
            count = count + 1
    return count



# დავალება მე-4

# Given two lists a and b.
# The function should return a list with all elements from a that are not in b.
# The order of elements in list a should be preserved.

def array_diff(a, b):
    result = []
    for item in a:
        if item not in b:
            result.append(item)
    return result



# დავალება მე-5

# Remove all exclamation marks (!) from the string,
# but make sure there is exactly one exclamation mark at the end.
# The input will always be a non-empty string.

def remove(st):
    result = ""
    for char in st:
        if char != "!":
            result += char
    result += "!"
    return result