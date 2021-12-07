import React from 'react';
import { Tooltip } from 'reactstrap';
import { v4 as uuid } from 'uuid';

const TooltipWrapper = ({onToogleListed, iconType, tooltipTitle}) => { 

  const [tooltipOpen, setTooltipOpen] = React.useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);
  const [id] = React.useState("id" + uuid());
 
    return (
      
              <Tooltip
                  placement="top"
                  isOpen={tooltipOpen}
                  target={id}
                  toggle={toggle}>
                  {tooltipTitle}
              </Tooltip>
     
    );
  
}

export default TooltipWrapper;
