

var month = Number(prompt("შეიყვანეთ სასურველი თვის კუთვნილი რიგის რიცხვი :"));

switch (month) {
    case 1:
        console.log("იანვარი - ზამთარი");
        break;
    case 2:
        console.log("თებერვალი - ზამთარი");
        break;
    case 3:
        console.log("მარტი - გაზაფხული");
        break;
    case 4:
        console.log("აპრილი - გაზაფხული");
        break;
    case 5:
        console.log("მაისი - გაზაფხული");
        break;
    case 6:
        console.log("ივნისი - ზაფხული");
        break;
    case 7:
        console.log("ივლისი - ზაფხული");
        break;
    case 8:
        console.log("აგვისტო - ზაფხული");
        break;
    case 9:
        console.log("სექტემბერი - შემოდგომა");
        break;
    case 10:
        console.log("ოქტომბერი - შემოდგომა");
        break;
    case 11:
        console.log("ნოემბერი - შემოდგომა");
        break;
    case 12:
        console.log("დეკემბერი - ზამთარი");
        break;
    default:
        console.log("თქვენ შეიყვანეთ არასწორი თვე");
}