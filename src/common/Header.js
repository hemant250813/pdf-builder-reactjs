import classes from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div className={`row ${classes.bg} ${classes.clearfix}`}>
        <div className="col-12 col-sm-6">
          <img
            src="https://conneqtdigital.in/wp-content/uploads/2022/10/logoc.png"
            className="attachment-medium_large size-medium_large wp-image-3028"
            alt=""
          />
        </div>
        <div className={`col-12 col-sm-6 ${classes.skills_text}`}>
          <h3>SKILL MASTERS</h3>
        </div>
      </div>

      {/* <div className={`${classes.clearfix} ${classes.bg} row`}>
        <div className={`${classes.conneqt_logo} col-12 col-sm-6`}>
          
        </div>
        <div className={`${classes.skills_text} col-6`}>
         
        </div>
      </div> */}
    </>
  );
};

export default Header;
