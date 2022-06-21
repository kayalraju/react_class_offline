export const HomeProps =(props)=>{
    const {name,email,city}=props
    return(
        <div>
            <h1>This is home component</h1>
            <h2>my name is {name}</h2>
            <h2>my email is {email}</h2>
            <h2>current city is {city}</h2>
        </div>
    )
}