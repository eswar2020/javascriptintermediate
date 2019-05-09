class User {
    constructor(firstname,middlename,lastname,age) {
        this.firstname = firstname;
        this.middlename = middlename;
        this.lastname = lastname;
        this.age = age;

    }
    getFullname () {
        return`${this.firstname} ${this.lastname} is my fullName`
        
    } 
    getmiddlename() {
        return `${this.middlename} is my middlename`
    }
    getage() {
        return `${this.age} is my age`
    }
    editname(newname) {
        const myname = newname.split(' ')
        this.firstname = myname[0]
          this.middlename = myname[1]
        this.lastname = myname[2]
       
    } 
}

    class Teacher extends User {
        constructor(firstname,middlename,lastname,age,subject) {
            super(firstname,middlename,lastname,age);
            this.subject = subject;
        }
        getsubject() {
            return `my name is ${this.firstname} and i teach ${this.subject}`;
        }
    }


    const eswar = new Teacher("eswar","","mullapudi",25,"cse");
   // console.log(eswar);
    console.log(eswar.getFullname());

    eswar.editname('Eswar no-middlename Mullaudi')
    console.log(eswar.getFullname());
    console.log(eswar.getmiddlename());
    console.log(eswar.getage());
    console.log(eswar.getsubject());
    


    
 
    