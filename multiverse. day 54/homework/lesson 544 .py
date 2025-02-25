def check_number():
    
    number = float(input("Enter a number: "))
    
    
    if number > 10:
        return "Cool!"
    else:
        return "The number is not greater than 10."


result = check_number()
print(result)