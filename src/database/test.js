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
        subject: 1,
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

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    const selectedProffys = await db.all("SELECT * FROM proffys")
    
    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)

    //console.log(selectedProffys)

    const selectedSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1300"
        AND class_schendule.time_to > "1300"

    `)

})