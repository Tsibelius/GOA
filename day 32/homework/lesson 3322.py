# დავალება 1-ლი

# Very simple, given a number (integer / decimal / both depending on the 
# language), find its opposite (additive inverse).

def opposite(number):
    return -number

# დავალება მე-2

# Complete the method that takes a boolean value and return a "Yes" 
# string for true, or a "No" string for false.

def bool_to_word(boolean):
    if boolean == True:
        return 'Yes'
    elif boolean == False:
        return 'No'
    
# დავალება მე-3

# Write a function that accepts an integer n and a string s as 
# parameters, and returns a string of s repeated exactly n times.

def repeat_str(n, s):
    return s * n

# დავალება მე-4

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

# დავალება მე-5

#  Your task is to create a function that does four basic mathematical 
# operations.      

def basic_op(operator, value1, value2):
    if operator == '+':
        return value1 + value2
    if operator == '-':
        return value1 - value2
    if operator == '*':
        return value1 * value2
    if operator == '/':
        return value1 / value2
    