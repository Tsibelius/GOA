
# დავალება 1-ლი

# Given a string and an integer size.
# Split the string into parts of equal length 'size'.
# Return a new string with each part separated by a space.


def split_in_parts(s, size):
    result = ""
    i = 0
    while i < len(s):
        part = s[i:i+size]
        result += part + " "
        i += size
    return result.strip()


# დავალება მე-2

# Given a sentence as a string.
# Split the string wherever the Georgian letter "ა" appears.
# Return the result as a list of substrings.

def split_by_a(sentence):
    return sentence.split("ა")


# დავალება მე-3

# Given a list of strings.
# Join the strings into a single string, using "*" as the separator.
# Return the resulting string.

def join_with_star(word_list):
    return '*'.join(word_list)


# დავალება მე-4

# Given an array of integers.
# Return a new array:
# - The first element is the count of positive numbers.
# - The second element is the sum of negative numbers.
# Note: 0 is neither positive nor negative.
# If the input is an empty array or None, return an empty array.

def count_positives_sum_negatives(arr):
    if arr == [] or arr is None:
        return []

    positive_count = 0
    negative_sum = 0

    for number in arr:
        if number > 0:
            positive_count += 1
        elif number < 0:
            negative_sum += number

    return [positive_count, negative_sum]


# დავალება მე-5

# Given an array of elements.
# Return a string where all elements are joined by commas, in the same order.
# Example: ["h", "o", "l", "a"] => "h,o,l,a"
# Do not use map() or join(). Use a basic loop and string building.

def print_array(arr):
    result = ""  

    for i in range(len(arr)):
        result += str(arr[i])  
        if i != len(arr) - 1:  
            result += ","

    return result

# დავალება 1-ლი

# Given a string and an integer size.
# Split the string into parts of equal length 'size'.
# Return a new string with each part separated by a space.


def split_in_parts(s, size):
    result = ""
    i = 0
    while i < len(s):
        part = s[i:i+size]
        result += part + " "
        i += size
    return result.strip()


# დავალება მე-2

# Given a sentence as a string.
# Split the string wherever the Georgian letter "ა" appears.
# Return the result as a list of substrings.

def split_by_a(sentence):
    return sentence.split("ა")


# დავალება მე-3

# Given a list of strings.
# Join the strings into a single string, using "*" as the separator.
# Return the resulting string.

def join_with_star(word_list):
    return '*'.join(word_list)


# დავალება მე-4

# Given an array of integers.
# Return a new array:
# - The first element is the count of positive numbers.
# - The second element is the sum of negative numbers.
# Note: 0 is neither positive nor negative.
# If the input is an empty array or None, return an empty array.

def count_positives_sum_negatives(arr):
    if arr == [] or arr is None:
        return []

    positive_count = 0
    negative_sum = 0

    for number in arr:
        if number > 0:
            positive_count += 1
        elif number < 0:
            negative_sum += number

    return [positive_count, negative_sum]


# დავალება მე-5

# Given an array of elements.
# Return a string where all elements are joined by commas, in the same order.
# Example: ["h", "o", "l", "a"] => "h,o,l,a"
# Do not use map() or join(). Use a basic loop and string building.

def print_array(arr):
    result = ""  

    for i in range(len(arr)):
        result += str(arr[i])  
        if i != len(arr) - 1:  
            result += ","

    return result

