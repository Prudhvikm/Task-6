//3.Write a “person” class to hold all the details.

class person {
    constructor (Name,Sof,Age,Gender,Qualification,Adderss,E_Mail,Mobile_No ){

        this.Name = Name;
        this.Sof = Sof;
        this.Age = Age;
        this.Gender = Gender;
        this.Qualification = Qualification;
        this.Adderss = Adderss;
        this.E_Mail = E_Mail;
        this.Mobile_No = Mobile_No
    }

    person_Name() {
        return `My Name is ${this.Name}`;
    }

    person_Sof() {
        return `Son of ${this.Sof}`;
    }

    person_Age() {

        return `${this.Age} years old`;
    }

    person_Gender() {
        return `Gender is ${this.Gender}`;
    }

    person_Qualification() {
        return`${this.Qualification} in Marketing & Production`;
    }

    person_Address() {
        return `My Address is ${this.Adderss}`;
    }

    person_E_mail() {
        return `Ping me on  ${this.E_Mail}`;
    }

    person_Mobile_No() {
        return `contact me on this ${this.Mobile_No} number`;
    }

}

const person_details = new person ("Prudhvi","Umamaheshware Rao","31","Male","MBA","Bengaluru","prudhviid@gmail.com","99******99")

console.log(person_details.person_Name());
console.log(person_details.person_Sof());
console.log(person_details.person_Age());
console.log(person_details.person_Gender());
console.log(person_details.person_Qualification());
console.log(person_details.person_Address());
console.log(person_details.person_E_mail());
console.log(person_details.person_Mobile_No());


    
