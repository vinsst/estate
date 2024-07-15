import React from "react";

function TableCompo() {
  return (
    <div className="task_compo">
      <div className="task_compo_left">
        <div className="rightMain__task_static_cell rightMain__task_static_txtParr_container"></div>
        <div className="rightMain__task_static_name rightMain__task_static_txtParr_container">
          Task 1
        </div>
        <div className="rightMain__task_static_type rightMain__task_static_txtParr_container">
          Call back
        </div>
        <div className="rightMain__task_static_time rightMain__task_static_txtParr_container">
          <div className="task_compo_time_txt">26 Jan, 17:00</div>
        </div>
        <div className="rightMain__task_static_desc rightMain__task_static_txtParr_container">
          Lorem ipsum dolor sit amet, consectetur
        </div>
        <div className="rightMain__task_static_user rightMain__task_static_txtParr_container">
          <div className="task_compo_user_mailText">email@email.com</div>
        </div>
      </div>
    </div>
  );
}

export default TableCompo;
