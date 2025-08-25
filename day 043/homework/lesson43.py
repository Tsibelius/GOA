# დავალება 1-ლი

# Code as fast as you can! You need to double the integer and return it.

def double_integer(chad):
    return chad * 2


#  დავალება მე-2

# Write a program that finds the summation of every number from 1 to num.
# The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.

def summation(num):
    return sum(range(1, num + 1))


# დავალება მე-3

# Make a simple function called greet that returns the most-famous 
# "hello world!".

def greet ():
    # # #  #   # # #
    # # #      # # #
    # # #      # # #
    # #    #     # #
    # #          # # 
    # #          # # 
    #      #       #
    #              #
    #              #
    return "Hello World!"


# დავალება მე-4
 
# Consider an array/list of sheep where some sheep may be missing from their place.
#  We need a function that counts the number of sheep present in the array (true means present).

def count_sheeps(sheep):
    return sum(1 for s in sheep if s is True)


# დავალება მე-5

# Complete the solution so that it reverses the string passed into it.

def reverse_string(s):
    return s[::-1]