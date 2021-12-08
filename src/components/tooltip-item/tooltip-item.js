import React from 'react';
import { Tooltip } from 'reactstrap';

const TooltipItem = ({id, tooltipTitle}) => { 

  const [tooltipOpen, setTooltipOpen] = React.useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);
 
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

export default TooltipItem;