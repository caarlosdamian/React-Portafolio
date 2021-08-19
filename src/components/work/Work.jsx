import '../../styles/work.scss'

export default function Work({nightMode}) {
    return (
        <div className={'works ' + (nightMode&& ' night')  }id="work">
            <div className="slider">
                <div className="container">
                    <div className="item">
                        <div className="left"></div>
                        <div className="right"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
