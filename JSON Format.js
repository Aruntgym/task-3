//Create your own resume data in JSON format

var myResume ={
    "basicdetails":{
        "name" :"ARUN T",
        "degree":"BCA",
        "mobile":9894326734,
        "email":"arunkumarg@gmail.com",
        "address":{
            "street":"Nellorepet",
            "village":"Besopet",
            "town" :"Gudiyatham",
            "District":"Vellore",
            "nationality":"Indian"
        }
    },
    "education":{
        "UG":{
            "degree":"BCA",
        "department":"COMPUTER APPLICATION",
        "Yearofpassing":2021,
        "CGPA":68.7
        },
        "HSC":{
            "Board":"State Board",
            "YOP":2016,
            "percentage":54
        },
        "SSLC":{
            "Board":"State Board",
            "YOP":2018,
            "percentage":46
        }
    },
    "Skillsets":{
        "Tools":"HTML5,CSS3,JS,React.JS,Node.JS,express.JS,MongoDB",
        "Level":"Absolute Beginer"
    },
    "Other Details":{
    "Languages known":"Tamil,English",
    "Hobbies":"Listening Music,Traveling to Temples"
    }
}
console.log(myResume);