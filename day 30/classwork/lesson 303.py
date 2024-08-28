# დავალება 1 :

def check_number():
    try:
        
        num = float(input("Please enter a number: "))
        
        
        if num > 10:
            print("You are welcome")
        else:
            print("you are baby")

    except ValueError:
        print("That's not a valid number. Please enter a numeric value.")


check_number()