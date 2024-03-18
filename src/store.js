import { defineStore } from "pinia";


export  const UseQuizStore = defineStore("QuizStore",{

    //state prendra comme valeur une fonction qui retourne un objet qui représente les infos qu'on va stocker
    
    state : () => ({
        quiz : {
            1 : {
                questions : {
                    A : 'GTR 35',
                    B : 'BUGATTI CHIRON',
                    C : 'PAGANI HUAYRA',
                    D : 'MERCEDES AMG GT',
                },
                answer : 'B',
                played : false,
                userAnswer : null
            },
            2 : {
                questions : {
                    A : 'AUDI TT',
                    B : 'TOYOTA SUPRA A90',
                    C : 'LAMBORGHINI HURACAN',
                    D : 'FERRARI 488 GTB',
                },
                answer : 'A',
                played : false,
                userAnswer : null
            },
            3 : {
                questions : {
                    A : 'AUDI RS7 SPORTBACK',
                    B : 'MERCEDES GT63 S AMG',
                    C : '2020 JAGUAR F-TYPE',
                    D : 'FORD MUSTANG',
                },
                answer : 'B',
                played : false,
                userAnswer : null
            },
            4 : {
                questions : {
                    A : 'CHEVROLET CORVETTE',
                    B : 'AUDI R8',
                    C : 'BUGATTI CHIRON',
                    D : 'BMW M4',
                },
                answer : 'D',
                played : false,
                userAnswer : null
            },
            5 : {
                questions : {
                    A : 'CHEVROLET CORVETTE',
                    B : 'TESLA MODEL S',
                    C : 'BUGATTI CHIRON',
                    D : 'BMW M4',
                },
                answer : 'B',
                played : false,
                userAnswer : null
            },
            6 : {
                questions : {
                    A : 'FERRARI SF90 STRADALE',
                    B : 'TESLA MODEL S',
                    C : 'MCLAREN P1',
                    D : 'HENNESSEY VENOM GT',
                },
                answer : 'C',
                played : false,
                userAnswer : null
            },
            7 : {
                questions : {
                    A : 'BENTLEY CONTINENTAL GT',
                    B : 'DODGE CHARGER',
                    C : 'DODGE CHALLENGER',
                    D : 'JAGUAR F-TYPE SVR',
                },
                answer : 'C',
                played : false,
                userAnswer : null
            },
            8 : {
                questions : {
                    A : 'PORSCHE 718 CAYMAN',
                    B : 'PORSCHE 911 GT3 RS',
                    C : 'PORSCHE TAYCAN',
                    D : 'PORSCHE 918 SPYDER',
                },
                answer : 'D',
                played : false,
                userAnswer : null
            },
            9 : {
                questions : {
                    A : 'CORVETTE C8',
                    B : 'ACURA NSX',
                    C : 'KOENIGSEGG JESKO',
                    D : 'TESLA ROADSTER',
                },
                answer : 'A',
                played : false,
                userAnswer : null
            },
            11 : {
                questions : {
                    A : 'FERRARI F12 BERLINETA',
                    B : 'ACURA NSX',
                    C : 'JAGUAR F-TYPE',
                    D : 'ROLLS-ROYCE WRAITH',
                },
                answer : 'C',
                played : false,
                userAnswer : null
            },
            10 : {
                questions : {
                    A : 'LAMBORGHINI AVENTADOR SVJ',
                    B : 'AUDI Q7',
                    C : 'LAMBORGHINI URUS',
                    D : '2021 CADILLAC ESCLADE ',
                },
                answer : 'C',
                played : false,
                userAnswer : null
            },
            12 : {
                questions : {
                    A : 'PORSCHE 718 CAYMAN',
                    B : '2018 PORSCHE PANAMERA',
                    C : 'PORSHE TAYCAN',
                    D : 'PORSCHE 911(992)',
                },
                answer : 'C',
                played : false,
                userAnswer : null
            },
            13 : {
                questions : {
                    A : 'BUGATI CHIRON',
                    B : 'KOENIGSEGG GEMERA',
                    C : 'LAMBORGHINI AVENTADOR',
                    D : 'ACURA NSX',
                },
                answer : 'B',
                played : false,
                userAnswer : null
            },
            14 : {
                questions : {
                    A : 'LAMBORGHINI HURACAN',
                    B : 'BMW M8 COMPETITION',
                    C : 'FERRARI F8 TRIBUTO',
                    D : 'CORVETTE C7',
                },
                answer : 'D',
                played : false,
                userAnswer : null
            },

        },
        userScore : 0,
    
    }),
    getters : {
    getUserScore(){
        return this.userScore;
    },
    getQuiz(){
        return this.quiz;
    }
    },
    actions : {

    } 
});

