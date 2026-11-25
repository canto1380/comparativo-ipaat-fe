import { AiOutlinePlus } from "react-icons/ai";
import { Button } from "antd";

const ListHeader = ({ title, btnLink, btnOnClick, btnText = "Agregar" }) => {
  return (
    <div className="pt-2 pb-2 px-4">
      <div className="menuContainer mb-0 d-flex justify-content-between align-items-center">
        <div>
          <p className="fw-bolder mb-0">{title}</p>
        </div>
        {(btnLink || btnOnClick) && (
          <div>
            <Button
              href={btnLink || undefined}
              onClick={btnOnClick}
              type="primary"
              icon={<AiOutlinePlus className="" />}
            >
              {btnText}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListHeader;
