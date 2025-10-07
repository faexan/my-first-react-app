// const animals = () => {
//     const animalsArr = ["Lion", "Cow", "Snake", "Lizard"];

//     return (
//         <div className="animalsDiv">
//             <h1>Animals: </h1>
//             <ul>
//                 {animalsArr.map((animal)=> {
//                     return <li key={animal}>{animal}</li>
//                 })}
//             </ul>
//         </div>
//     )
// }


// const animals = () => {
//     const animalsArr = ["Lion", "Cow", "Snake", "Lizard"];
//     const animlasList = animalsArr.map((animal)=> {
//         return <li key={animal}>{animal}</li>
//     })

//     return (
//         <div className="animalsDiv">
//             <h1>Animals: </h1>
//             <ul>
//                 {animlasList}
//             </ul>
//         </div>
//     )
// }


// function ListItem(props) {
//     return <li>{props.oneAnimal}</li>
// }



// function List(props) {
//     return <ul>
//         {props.animalList.map((animal)=> {
//             return <ListItem key={animal} oneAnimal={animal} />
//         })}
//     </ul>
// }



// function animalsE() {
//     const animals = ["Lion", "Cow", "Snake", "Lizard"];
//     return <div className="animalsDiv">
//         <h1>Animals: </h1>
//         <List animalList={animals} />
//     </div>
// }

function List ({animalsList}) {
    if(!animalsList) {
        return <div>Loading...</div>
    }


    if(animalsList.length === 0) {
        return <div>There's no element in the list!</div>
    }


    return (
        <ul>{animalsList.map((animal)=> {
            return <li key={animal}>{animal}</li>
        })}</ul>
    )





    
}



function animalsE() {
    const animals = ["Lion", "Cow", "Snake", "Lizard"];

    return (
        <div>
            <h1>Animals:</h1>
            <List animalsList={animals} />
        </div>
    )
}


export default animalsE







