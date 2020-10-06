class Form {

    constructor() {
        this.input = createInput("Name");
        this.email = createInput("E-mail")
        this.button = createButton('Submit');
        this.greeting = createElement('h2');
        this.text = createElement('h1', "Survey On Our School Students");
        this.question1 = createElement('h3', "Q1. Do you think we need to have free lunch meals in our school canteen for the kids who are very poor?");
        this.radio = createRadio('h3');
        this.radio.option('Yes');
        this.radio.option('No');
        this.question2 = createElement('h3', "Q2. Would you be willing to contribute a small amount every month for such a program?");
        this.radio1 = createRadio('h3');
        this.radio1.option('Yes');
        this.radio1.option('No');
        this.question3 = createElement('h3', "Q3. How much per month would you be willing to pay?");
        this.radio2 = createRadio('h3');
        this.radio2.option('Less than 100');
        this.radio2.option('100');
        this.radio2.option('More than 100');
    }


    display() {
        this.input.position(470, 255)
        this.email.position(470, 165)
        this.button.position(500, 700)
        this.greeting.position(400, 105)
        this.text.position(400, 5)
        this.question1.position(300, 360)
        this.radio.position(400, 450)
        this.question2.position(300, 450)
        this.radio1.position(400, 540)
        this.question3.position(300, 540)
        this.radio2.position(400, 600)

        this.button.mousePressed(() => {
            User.input = this.input.value();
            User.email = this.email.value();
            peopleCount += 1;
            User.index = peopleCount;
            User.update();
            User.updateCount(peopleCount);
        });

    }
}