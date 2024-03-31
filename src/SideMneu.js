export default function SideMneu() {
    return (
        <div className="side-mneu">
            <div className="box-btn">
                <Btn />
                <Btn />
                <Btn />
                <Btn />
                <Btn />
                <Btn />
                <Btn />
            </div>
        </div>
    )
}

function Btn() {
    return  <button className="btn">Click Me</button>
}