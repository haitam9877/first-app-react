/* eslint-disable jsx-a11y/alt-text */


export default function SideMneu() {
    const catigourys = [
        {
            id: 1,
            btnTitle: "اكاديمية",
            cha:   <span>🍔🍔</span>
        },
        {
            id: 2,
            btnTitle: "الاكثر قراة",
            cha:<div>
                <img style={{ width: "70px"}} src="https://media1.thrillophilia.com/filestore/uwpz857lua13qmvub6um2v93dlrm_IMG%20Worlds%20%20of%20Adventure.jpg" />
                </div>
            
        },
        {
            id: 3,
            btnTitle: "مميز",
            cha:<>
                    <h1>Click Me</h1>
                    <span>👍</span>
                </>
        }
    ]
    const catigourysLists = catigourys.map((cat) => {
        return <Btn key={cat.id} btnTitle={cat.btnTitle}>
            {cat.cha}
        </Btn>
    })
    return (
        <div className="side-mneu">
            <div className="box-btn">
                {catigourysLists}
            </div>
        </div>
    )
}

function Btn({ btnTitle, children }) {
   
    return (
        <>
        {btnTitle == null || btnTitle === "" ? <></> : <button className="btn">
            {btnTitle}
            {children}
        </button> }
        </>
    
    )
}