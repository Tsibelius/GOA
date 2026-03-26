// =====================================================
//                  დავალება მე-2
// შექმენით ფუნქცია, რომელსაც არგუმენტად გადაეცემა ტექსტი.
// ფუნქციამ უნდა დააბრუნოს ობიექტი, სადაც ცალ-ცალკე დაითვლით
// რამდენი ხმოვანია და რამდენი თანხმოვანი.
// =====================================================

function countVowelsConsonants(text){

    let result = {
        vowels: 0,
        consonants: 0
    };

    let vowelsList = "aeiouAEIOU";

    for(let i = 0; i < text.length; i++){

        let ii = text[i];

        
        if((ii >= "a" && ii <= "z") || (ii >= "A" && ii <= "Z")){

            if(vowelsList.includes(ii)){
                result.vowels = result.vowels + 1;
            } else {
                result.consonants = result.consonants + 1;
            }

        }
    }

    return result;
}



// =====================================================
//                დავალება მე-3
// შექმენით ფუნქცია, რომელსაც გადაეცემა ტექსტი.
// ფუნქციამ უნდა დააბრუნოს ობიექტი სადაც იქნება რამდენი დიდი
// და პატარა ასო არის მოცემულ ტექსტში.
// =====================================================

function countUpperLower(text){

    let result = {
        upper: 0,
        lower: 0
    };

    for(let i = 0; i < text.length; i++){

        let g = text[i];

        if(g >= "A" && g <= "Z"){
            result.upper = result.upper + 1;
        } 
        else if(g >= "a" && g <= "z"){
            result.lower = result.lower + 1;
        }

    }

    return result;
}



// =====================================================
//                  დავალება მე-4
// შექმენით ფუნქცია, რომელსაც გადაეცემა ერთი სიმბოლო.
// switch / case გამოიყენეთ დაადგინეთ ეს სიმბოლო ასოა,
// რიცხვია თუ სხვა სიმბოლო.
// =====================================================

function checkSymbol(ww){

    switch(true){

        case (ww >= "a" && ww <= "z"):
        case (ww >= "A" && ww <= "Z"):
            return "ასოა";

        case (ww >= "0" && ww <= "9"):
            return "რიცხვია";

        default:
            return "სხვა სიმბოლოა";
    }

}



// =====================================================
//                    დავალება მე-5
// შექმენით ფუნქცია, რომელსაც გადაეცემა ტექსტი სადაც იქნება რიცხვებიც შერეული.
// დათვალეთ რამდენი ლუწი ციფრია მოცემულ სტრინგში (ternary operator)
// =====================================================

function countEvenDigits(text){

    let count = 0;

    for(let i = 0; i < text.length; i++){

        let charcho = text[i];

        if(charcho >= "0" && charcho <= "9"){

            
            count = (Number(charcho) % 2 === 0) ? count + 1 : count;

        }

    }

    return count;
}