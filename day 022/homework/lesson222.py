# If - Else:

#                         დავალება 1-ლი                         
# Write an if-else statement to determine if a year entered by the user is a leap year.
#დაწერეთ if-else განცხადება იმის დასადგენად, არის თუ არა მომხმარებლის მიერ შეყვანილი წელი ნახტომი წელი.

age =int(input("Enter your age: "))
if age >= 18:
    print("You are wellcome! ")
elif age < 0:
    print("You haven't been born yet")
if age >= 100:
    print(" You are too old to signed up")    
else:
    print("You must be 18+ to sign up")

#                         დავალება მე-2
# Check if a given string entered by the user is a palindrome.
#შეამოწმეთ, არის თუ არა მომხმარებლის მიერ შეყვანილი მოცემული სტრიქონი პალინდრომი.

str = input("Enter a string :")
if str == str [:: -1] :
    print("string is palindrome")
else:
    print("string is not palindrome")

#                         დავალება მე-3
# termine if a number entered by the user is positive, negative, or zero.
#დაასრულეთ, თუ მომხმარებლის მიერ შეყვანილი რიცხვი არის დადებითი, უარყოფითი ან ნულოვანი.

num = float(input("Enter a namber: "))
if num > 0:
    print(" Positive number.")
elif num == 0:
    print("Zero")    
else:
    print("Negative number.")


#                         დავალება მე-4
# calculate the BMI of a person based on their height and weight entered by the user and classify their BMI category using if-else.
#გამოთვალეთ პირის BMI მომხმარებლის მიერ შეყვანილი სიმაღლისა და წონის მიხედვით და დაალაგეთ მათი BMI კატეგორია if-else-ის გამოყენებით

height = float()
weight = float()

def BMI (height , weight):
    bmi = weight / (height**2) * 783
    if (bmi < 16):
        return "severely underweight" , bmi
    
    elif (bmi >= 16 and bmi < 18.5):
        return "underweight"
    
    elif (bmi >= 18.5 and bmi < 25):
        return "healthy" , bmi
    
    elif (bmi >= 25 and bmi < 38) :
        return "overweight" , bmi
    elif (bmi >= 38):
        return "obese" , bmi
    
quote , bmi  = BMI ( height , weight)
print("your bmi is: {} and you are: {}" .format (bmi , quote) )   
    
