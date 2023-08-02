import script from '../images/navLogo.svg'
import "../Styles/footer.css"
import copr from "../images/copr.svg"

const Footer=()=> {


  return (
    <div className="footer">
      <div className="line"><hr/></div>
      <div className="fotter-head">
        <div className="fotter-head-logo">
          <img src={script} alt="logo" width={70}/>
        </div>
        <div className="footer-head-link"></div>
      </div>
      <div className="line"><hr/></div>
      <div className="footer-icon">
        <div className="footer-icon-left">
          <img src={copr}alt="copright" />
          <span>{" "}2023 Manuscript Reader</span>
        </div>
        <div className="footer-icon-right">
          
        </div>
      </div>
      
    </div>
  )
}

export default Footer