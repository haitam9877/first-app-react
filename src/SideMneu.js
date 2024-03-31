
export default function SideMneu() {
    return (
        <div className="side-mneu">
            <div className="box-btn">
                <Btn btnTitle="اكاديمية">
                
                    <span>🍔🍔</span>
                    
                </Btn>

                <Btn btnTitle="الاكثر قراة">
                
                    <div>
                        <img style={{width: "70px"}} src="https://media1.thrillophilia.com/filestore/uwpz857lua13qmvub6um2v93dlrm_IMG%20Worlds%20%20of%20Adventure.jpg" ></img>
                    </div>
                
                </Btn>
                
                <Btn btnTitle="مميز">
                
                    <h1>Click Me</h1>
                    <span>👍</span>
                
                </Btn>
                <Btn btnTitle="مقلاات الاسبوع"/>
            
            </div>
        </div>
    )
}

function Btn({btnTitle,children}) {
    return <button className="btn">
        {btnTitle}
        {children}
    </button>
}