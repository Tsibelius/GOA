//                                    დავალება 1-ლი


let student = {
    name: "Giorgi",
    surname: "Tsibliashvili",
    age: 1800,
    school: "GOA"
};

for (let key in student) {

    if (typeof student[key] === "string") {

        let randomNumber = Math.floor(Math.random() * 5) + 1;

        let result = "";

        
        for (let i = 0; i < randomNumber; i++) {
            result += student[key];
        }

        console.log(result);
    }
}