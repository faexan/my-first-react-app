function Item({name, isPacked}) {
    if (isPacked) {
        return null
    } else {
        return <li className="item">{name}</li>
    }
    
}

function Item2({name, isPacked}) {
    return <li className="item">
        {isPacked ? (<del>name + ' ✅'</del>): name}
        </li>
    
}

function Item3({name, isPacked}) {
    return <li className="item">
        {name} {isPacked && '✅'}
    </li>
}



export default function PackingList() {
    return (
        <>
        <h1>Sally Ride's Paking List</h1>
        <ul>
            <Item3
            isPacked={true}
            name="space suit"
             />
             <Item3
             isPacked={true}
             name="Helmet of Tam"
              />
              <Item3
              isPacked={false}
              name="Photo of Tam"
              />

        </ul>
        </>
    )
}