import "../Styles/Display.css"
function Display() {
  return (
    <div className="display">
        <div className="display-image">

        </div>
        <div className="display-text">
            <div className="display-actual">
                <h1>Actual text</h1>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis officia ipsum totam, aspernatur modi similique voluptatum non ducimus beatae perferendisduhs, maxime sapiente?</span>
            </div>
            <div className="display-converted">
                <h1>Converted text</h1>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas hic nam obcaecati delectus eos temporibus dignissimos. Dicta suscipit placeat quis commodi itaque totam ad vitae.</span>
            </div>
        </div>
    </div>
  )
}

export default Display