def vaporcode(s):

    result = ""  

    for char in s:  

        if char != " ":  

            result += char.upper() + "  "  

    return result.strip()
