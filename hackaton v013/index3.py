def is_isogram(string):
    seen_letters = ()
    string_lower = string.lower()

    for char in string_lower:
        if char in seen_letters:
            return False
        else:
            seen_letters.add(char)
    return True
