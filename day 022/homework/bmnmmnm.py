
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
    
