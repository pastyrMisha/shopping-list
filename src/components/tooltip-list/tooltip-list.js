import React from 'react';
import { Tooltip } from 'reactstrap';
import { v4 as uuid } from 'uuid';

const TooltipWrapper = ({onToogleListed}) => { 

  const [tooltipOpen, setTooltipOpen] = React.useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);
  const [id] = React.useState("id" + uuid());
 
    return (
      <button 
          type="button"
          id={id}
          className="btn-plus btn-sm"
          onClick={onToogleListed}>
              <i className="fa fa-plus"></i>
              <Tooltip
                  placement="top"
                  isOpen={tooltipOpen}
                  target={id}
                  toggle={toggle}>
                  Добавить в список
              </Tooltip>
      </button> 
    );
  
}

export default TooltipWrapper;
