# დავალება 1-ლი

# This code does not execute properly. Try to figure out why.

def multiply(a, b):
    return a * b

# დავალება მე-2

# We need a function that can transform a number (integer) into a string.
# What ways of achieving this do you know?

def number_to_string(num):
    return str(num)

# დავალება მე-3

#  We need a function that can transform a string into a number.
#  What ways of achieving this do you know?

# Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

def string_to_number(s):
    return int(s)

# დავალება მე-4
 
# In this simple assignment you are given a number and have to make it negative.
#  But maybe the number is already negative?

def make_negative( number ):
    if number > 0:
        return number * -1
    
    else:
        return number