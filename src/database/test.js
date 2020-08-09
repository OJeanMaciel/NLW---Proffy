const Database = require('./db')
const createProffy = require('./createProffy')



Database.then(async (db) => {
    proffyValue = {
        name: "Jean Kevin Maciel", 
        avatar: "https://avatars0.githubusercontent.com/u/68939572?s=460&u=08ca257898b4377c19fe853f6f414f80dfdb4b65&v=4",
        whastapp: "89898989",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        
    }

    classValue = {
        subject: "Química",
        cost: "20",
    }

    classScheduleValues = [
        {             
        weekday: 1,
        time_from: 720,
        time_to: 1220
        },        
        {             
        weekday: 0,
        time_from: 520,
        time_to: 1220
        }
    ]

    await createProffy(db, {proffyValue, classValue, classScheduleValues})

})