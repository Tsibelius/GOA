# დავალება 1-ლი

# Return a String from a Function
# Make a function that returns a greeting statement, using an input.
# Your program should return: "Hello, <name> how are you doing today?"

def greet(name):
    return f"Hello, {name} how are you doing today?"

# დავალება მე-2

# Keep Hydrated!
# Nathan drinks 0.5 litres of water per hour. Given the time in hours,
# return the number of litres Nathan will drink, rounded down.

def litres(time):
    return time // 2

# დავალება მე-3
                                                                                                                  
# How good are you really?
# Return True if your score is better than the average of your class.

def better_than_average(class_points, your_points):
    average = sum(class_points) / len(class_points)
    return your_points > average

# დავალება მე-4

# Invert values
# Given a list of numbers, return a list where each number is inverted.

def invert(lst):
    return [-x for x in lst]

# დავალება მე-5

# Find Maximum and Minimum Values of a List
# Write functions to find the minimum and maximum in a list.

def minimum(arr):
    min_val = arr[0]
    for num in arr:
        if num < min_val:
            min_val = num
    return min_val

def maximum(arr):
    max_val = arr[0]
    for num in arr:
        if num > max_val:
            max_val = num
    return max_val