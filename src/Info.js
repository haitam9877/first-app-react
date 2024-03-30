export default function (props) {

    console.log(props)
    const name = props.name
    const email = props.email
    return (
        <div>
            <h1>{name}</h1>
            <h2>{ email}</h2>
        </div>
    )
}