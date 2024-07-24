#დავალება 1-ლი

chad_list =[]
for i in range(1, 11): chad_list.append(i) 
print(chad_list)

#დავალება მე-2

even_num =[2, 4, 6, 8, 10]
odd_num =(1, 3, 5, 7, 9)

even_num.extend(odd_num)
print(even_num)

#დავალება მე-3


tventy_chad =list(range(1,21))

for chad in tventy_chad:
    print(chad)

#დავალება მე-4


numbers = list(range(1, 21)) 
odd_numbers = [] 
for number in numbers[:]:
    if number % 2 != 0: 
        numbers.remove(number)
        odd_numbers.append(number)
 
print("Even numbers:", numbers)
print("odd numbers:" , odd_numbers)  



<<<<<<< HEAD
 
=======
 
>>>>>>> de5a5e814ca1f5ade3f7ede64c9a0b7bebc5a16c
