console.log("red")

12345678910

const stdData = [
    {
        id: 1,
        name: "ali",
        class: 7,
        rollNumber: 233523,
        fessPaid : true,
    },
    {
        id: 2,
        name: "rehaman",
        class: 3,
        rollNumber: 425571,
        fessPaid : false,
    },
    {
        id: 3,
        name: "kaleem",
        class: 6,
        rollNumber: 822910,
        fessPaid : true,
    },
    {
        id: 4,
        name: "fahad",
        class: 5,
        rollNumber: 455688,
        fessPaid : true,
    },
    {
        id: 5,
        name: "yameen",
        class: 1,
        rollNumber: 115553,
        fessPaid : false,
    },
    {
        id: 6,
        name: "amjad",
        class: 8,
        rollNumber: 778269,
        fessPaid : true,
    },
    {
        id: 7,
        name: "aleem",
        class: 10,
        rollNumber: 435562,
        fessPaid : true,
    },
    {
        id: 8,
        name: "haseeb",
        class: 4,
        rollNumber: 309802,
        fessPaid : false,
    },
    {
        id: 9,
        name: "nabeel",
        class: 7,
        rollNumber: 399592,
        fessPaid : true,
    },
    {
        id: 10,
        name: "rashid",
        class: 2,
        rollNumber: 344488,
        fessPaid : false,
    },
    {
        id: 11,
        name: "arbaz",
        class: 1,
        rollNumber: 899930,
        fessPaid : true,
    },
]


const papa = document.getElementById("papa")
const srNO = document.querySelector("srNO")
const name = document.querySelector("name")
const classes = document.querySelector("class")
const rollNumber = document.querySelector("rollNumber")
const fees = document.querySelector("fees")

console.log(srNO,
    name,
    classes,
    rollNumber,
    fees)

stdData.forEach((value,index,array)=>{
    console.log(value)
    papa.innerHTML += `
            <div class="studentCard">
            <h2 id="srNO">
               std no ${value.id}
            </h2>
            <h3 id="name">
                name  ${value.name}
            </h3>
            <h4 id="class">
                class  ${value.class}
            </h4>
            <h4 id="rollNumber">
                roll number  ${value.rollNumber}
            </h4>
            <h5 id="fees">
                fess paid  ${value.fessPaid}
            </h5>
        </div>
    `
})
