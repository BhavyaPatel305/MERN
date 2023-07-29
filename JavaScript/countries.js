var countries =[
    {
        name:"India",
        states:[
            {
                name:"Gujarat",
                cities:[
                    {
                        name:"Ahmadabad",
                        population:100000
                        
                    },
                    {
                        name:"Surat",
                        population:20000000
                        
                    }

                ]
            },
            {
                name:"Rajasthan",
                cities:[
                    {
                        name:"Jaipur",
                        population:2345
                        
                    },
                    {
                        name:"Jodhpur",
                        population:3450
                        
                    }

                ]
            }
        ]
    },
    {
        name:"USA",
        states:[
            {
                name:"New York",
                cities:[
                    {
                        name:"New York City",
                        population:24567
                        
                    },
                    {
                        name:"Buffalo",
                        population:2000
                        
                    }

                ]
            },
            {
                name:"California",
                cities:[
                    {
                        name:"Los Angeles",
                        population:2200
                        
                    },
                    {
                        name:"San Francisco",
                        population:3000
                        
                    }

                ]
            }
       ]
    }
]


function print(){
    // print names of cities
    for(let i = 0; i<countries.length; i++){
        for(let j = 0; j<countries[i].states.length; j++){
            for(let k = 0; k<countries[i].states[j].cities.length; k++){
                console.log(countries[i].states[j].cities[k].name)
            }
        }
    }
}

//print()

// find world population
function print1(){
    world_pop = 0
    for(let i = 0; i<countries.length; i++){
        for(let j = 0; j<countries[i].states.length; j++){
            for(let k = 0; k<countries[i].states[j].cities.length; k++){
                world_pop = world_pop + (countries[i].states[j].cities[k].population)
            }
        }
    }
    console.log(world_pop)
}
//print1()




// find india population

function print2(){
    world_pop = 0
    for(let i = 0; i<1; i++){
        for(let j = 0; j<countries[i].states.length; j++){
            for(let k = 0; k<countries[i].states[j].cities.length; k++){
                world_pop = world_pop + (countries[i].states[j].cities[k].population)
            }
        }
    }
    console.log(world_pop)
}
//print2()





// find usa population

function print3(){
    world_pop = 0
    for(let i = 1; i<2; i++){
        for(let j = 0; j<countries[i].states.length; j++){
            for(let k = 0; k<countries[i].states[j].cities.length; k++){
                world_pop = world_pop + (countries[i].states[j].cities[k].population)
            }
        }
    }
    console.log(world_pop)
}
//print3()




// Which state has highest population

function print4(){
    const state_pops = []
    temp = 0
    for(let i = 0; i<countries.length; i++){
        for(let j = 0; j<countries[i].states.length; j++){
            for(let k = 0; k<countries[i].states[j].cities.length; k++){
              temp = temp + (countries[i].states[j].cities[k].population)  
            }
            state_pops.push(temp)
        }

    }
    const maxEle = Math.max(state_pops)
    const indexOfMax = state_pops.indexOf(max)
    console.log()
}
//print4()


function print5(){
    maxPops = 0
    maxPopsState = ""
    total = 0
    const array = countries.map((country)=>{
        return country.states.map((state)=>{
            total = 0
            state.cities.map((pops)=>{
                total = total + pops.population
                return pops.population
            })
            if (total>maxPops){
                maxPops = total
                maxPopsState = state.name

            }
        })
    })

    console.log(maxPopsState)  
}
//print5()

// Which city has highest pops
function print6(){
    maxPops = 0
    maxPopsCity = ""
    total = 0
    const array = countries.map((country)=>{
        return country.states.map((state)=>{
            return state.cities.map((city)=>{
                total = city.population
                if (total>maxPops){
                    maxPops = total
                    maxPopsCity = city.name
                }
            })
        })
    })

    console.log(maxPopsCity)  
}
print6()
