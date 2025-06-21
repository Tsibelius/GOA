def remove_vowels(string):
    vowels = {'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'}
    result_string = ""

    for char in string:
        if char not in vowels:
            result_string += char
    return result_string
