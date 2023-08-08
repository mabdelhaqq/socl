import "./Person.scss"
interface Props {
    url: string,
    name: string
}

const Person = (props: Props) => {
  return (
    <div className="person">
        <img src={props.url} alt="personimg" className="imgpe" />
        <h6 className="namepe">{props.name}</h6>
    </div>
  )
}

export default Person