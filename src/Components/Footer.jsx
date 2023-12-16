import script from '../images/navLogo.svg'
import "../Styles/footer.css"
import copr from "../images/copr.svg"

const Footer=()=> {


  return (
    <>
      <div className="line"><hr/></div>
      <div className="footer">
        <div className="footer-icon">
          <div className="footer-icon-left">
            <i className="fa-regular fa-copyright"></i>
            <span>{" "}2023 Manuscript Reader</span>
          </div>
          <div className="footer-icon-right">
              <i className="fa-brands fa-github"></i>
              <i className="fa-solid fa-globe"></i>
              <i className="fa-brands fa-twitter"></i>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer