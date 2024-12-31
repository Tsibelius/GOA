# Task 1:
# Multiplication Function
# Multiply two numbers and return the result.
def multiply(a, b):
    return a * b

# Task 2:
# Determine Even or Odd
# Return "Even" if the number is even, otherwise return "Odd".
def even_or_odd(number):
    return "Even" if number % 2 == 0 else "Odd"

# Task 3:
# Convert Number to String
# Convert the given number into a string and return it.
def number_to_string(num):
    return str(num)

# Task 5: 
# Reverse a String
# Reverse the given string and return the result.
def solution(string):
    return string[::-1]

# Task 6: 
# Convert Number to Negative
# Convert the given number to its negative value and return it.
def make_negative(number):
    return -abs(number)

# Task 7: 
# Find Opposite Number
# Return the opposite value of the given number.
def opposite(number):
    return -number

# Task 8: 
# Boolean to String Conversion
# Return "Yes" if the boolean is True, otherwise return "No".
def bool_to_word(boolean):
    return "Yes" if boolean else "No"

# Task 9: 
# Sum of Positive Numbers
# Calculate and return the sum of all positive numbers in the list.
def positive_sum(arr):
    return sum(x for x in arr if x > 0)

# Task 10: 
# Repeat a String
# Repeat the given string a specified number of times and return it.
def repeat_str(repeat, string):
    return string * repeat

# Task 11: 
# Remove First and Last Character
# Remove the first and last character from the given string and return it.
def remove_char(s):
    return s[1:-1]

# Task 12: 
# Sum of Squares
# Calculate and return the sum of the squares of all numbers in the list.
def square_sum(numbers):
    return sum(x**2 for x in numbers)

# Task 13: 
# Find the Smallest Integer
# Find and return the smallest integer in the given list.
def find_smallest_int(arr):
    return min(arr)

# Task 14: 
# Convert String to Number
# Convert the given string into an integer and return it.
def string_to_number(s):
    return int(s)

# Task 15: 
# Summation from 1 to n
# Calculate and return the summation of numbers from 1 to n.
def summation(num):
    return sum(range(1, num + 1))

# Task 16: 
# Return "hello world!"
# Return the string "hello world!".
def greet():
    return "hello world!"

# Task 17: 
# Count True Values
# Count and return the number of True values in the list.
def count_sheeps(sheep):
    return sheep.count(True)

# Task 18: 
# Remove Spaces from String
# Remove all spaces from the given string and return the result.
def no_space(x):
    return x.replace(" ", "")

# Task 19: 
# Double the Integer
# Double the given integer and return the result.
def double_integer(i):
    return i * 2

# Task 20: 
# Personalized Greeting
# Return a greeting message that includes the given name.
def greet(name):
    return f"Hello, {name} how are you doing today?"

# Task 21: 
# Convert Boolean to String
# Convert the boolean value (True/False) into a string and return it.
def boolean_to_string(b):
    return str(b)

# Task 22: 
# Basic Mathematical Operations
# Perform the given operation (+, -, *, /) on two numbers and return the result.
def basic_op(operator, value1, value2):
    if operator == '+':
        return value1 + value2
    elif operator == '-':
        return value1 - value2
    elif operator == '*':
        return value1 * value2
    elif operator == '/':
        return value1 / value2

# Task 23:
# Calculate Water Consumption
# Calculate and return the total liters of water consumed (1 liter per 2 hours).
def litres(time):
    return time // 2

# Task 24: 
# Determine the Century
# Calculate and return the century of the given year.
def century(year):
    return (year + 99) // 100

# Task 25: 
# Double Array Elements
# Double each element in the array and return the new array.
def maps(a):
    return [x * 2 for x in a]

# Task 26: 
# Sum of Array Elements
# Calculate and return the sum of all elements in the array.
def sum_array(a):
    return sum(a)
