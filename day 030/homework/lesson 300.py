# დავალება 1 :

def check_odd_even():
    number = int(input("Enter a number: "))
    if number % 2 == 0:
        print(f"{number} is even.")
    else:
        print(f"{number} is odd.")
check_odd_even()        

# დავალება 2 :
 
def check_positive_negative():
    number = float(input("Enter a number: "))
    if number > 0:
        print(f"{number} is positive.")
    elif number < 0:
        print(f"{number} is negative.")
    else:
        print("The number is zero.")
check_positive_negative()

# დავალება 3 :

def check_multiple_of_five():
    number = int(input("Enter a number: "))
    if number % 5 == 0:
        print(f"{number} is a multiple of five.")
    else:
        print(f"{number} is not a multiple of five.")
check_multiple_of_five() 

# დავალება 4 :

def check_legal_age():
    age = int(input("Enter your age: "))
    if age >= 18:
        print("You are welcome.")
    else:
        print("You are not of legal age.")
check_legal_age()

# დავალება 5 :

def print_square():
    number = int(input("Please enter a number: "))
    square = number ** 2
    print(f"The square of {number} is {square}")

print_square()

# დავალება 6 :

def validate_password():
    while True:
        password = input("Please enter a password: ")
        if len(password) >= 8:
            print("Registration successful!")
            break
        else:
            print("Password must contain at least 8 characters. Please try again.")

validate_password()

# დავალება 7 :

def square_numbers():
    numbers = []
    
    
    for i in range(10):
        num = int(input(f"Enter number {i+1}: "))
        numbers.append(num)
 
    for num in numbers:
        print(f"The square of {num} is {num ** 2}")

square_numbers()