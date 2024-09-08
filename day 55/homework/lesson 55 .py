# დავალება 1

def difference(x, y):
    return x - y


result = difference(10, 5)
print(result)

# დავალება 2

def concatenate_words(word1, word2):
    return word1 + " " + word2


result = concatenate_words("hello", "friend")
print(result)

# დავალება 3

def calculate_area(length, width):
    return length * width


length = 4
width = 6
area = calculate_area(length, width)
print(f"The area of the rectangle is {area}")

# დავალება 4

def greet(name):
    return f"Hello, {name}"


print(greet("Anna"))

# დავალება 5

def classify_number(number):
    if number > 10:
        return "large"
    else:
        return "small"


print(classify_number(9))
print(classify_number(15))