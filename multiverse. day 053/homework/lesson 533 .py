def check_odd_or_even():
    
    try:
        number = int(input("Enter a number: "))  
        
        if number % 2 == 0:
            print(f"{number} is even.")
        else:
            print(f"{number} is odd.")
    except ValueError:
        print("Please enter a valid number.")

check_odd_or_even()