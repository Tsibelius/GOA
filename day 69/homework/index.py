# დავალება 1-ლი
# მომხმარებელს შემოატანინეთ სიტყვა. ამ სიტყვაშუ სადაც იქნება “g” ასო იმ ადგილებში გასპლიტეთ და დიდი “G”-თი გაერთიანეთ.

def split_and_join_g(word):
    parts = word.split("g")
    return "G".join(parts)

# მაგალითი
print(split_and_join_g("doggy"))  # შედეგი: doGGy


# დავალება მე-2
# სიტყვაში დიდი ასოები გადაიქცეს პატარა ასოდ და პატარა ასოები დიდად (swapcase)

def swap_case(word):
    return word.swapcase()

# მაგალითი
print(swap_case("HelLo"))  # შედეგი: hELlO


# დავალება მე-3
# რიცხვების სიიდან გავაკეთოთ სტრინგი '@' სიმბოლოთი გაერთიანებული

def join_numbers_with_at(numbers):
    return '@'.join(str(num) for num in numbers)

# მაგალითი
print(join_numbers_with_at([1, 2, 3, 4]))  # შედეგი: "1@2@3@4"


# დავალება მე-4

def calculator(equation):
    left, operator, right = equation.split()
    a = len(left)
    b = len(right)

    if operator == '+':
        result = a + b
    elif operator == '-':
        result = a - b
    elif operator == '*':
        result = a * b
    elif operator == '//':
        result = a // b

    return '.' * result


# დავალება მე-5

def get_end_tag(startTag):
    name = ""
    for char in startTag:
        if char == ' ' or char == '>':
            break
        if char != '<':
            name += char
    return "</" + name + ">"
