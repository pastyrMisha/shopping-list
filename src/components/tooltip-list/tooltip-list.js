// import React from 'react';
// import { Component } from 'react';
// import { Tooltip } from 'reactstrap';
// import PostListItem from '../post-list-item/post-list-item';
// import PostList from '../post-list/post-list';

// import { v4 as uuidv5 } from 'uuid';

// const TooltipWrapper = ({id, tooltipTitle}) => { 

//   const [tooltipOpen, setTooltipOpen] = React.useState(false);
//   const toggle = () => setTooltipOpen(!tooltipOpen);
//   // const [id] = React.useState("id" + uuid());
 
//     return (
            
//               <Tooltip
//                   placement="top"
//                   isOpen={tooltipOpen}
//                   target={id}
//                   toggle={toggle}>
//                   {tooltipTitle}
//               </Tooltip>
//     );
  
// }

// export default TooltipWrapper;




    // const withTooltip = (View) => {
      
    //     return class extends Component {

         
    //     componentDidMount() {
    //       // <Tooltip
    //       //         placement="top"
    //       //         isOpen={tooltipOpen}
    //       //         target={id}
    //       //         toggle={toggle}>
    //       //         {tooltipTitle}
    //       // </Tooltip>
    //       console.log(this.props);
    //     }
            
          

    //       render() {
    //         return <View {...this.props}/>
            
    //       }
    //     }
    // }

    // export default withTooltip(PostListItem);