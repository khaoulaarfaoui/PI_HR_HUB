import React from 'react';

import {Inject, ScheduleComponent, Day, Week, WorkWeek , Month , Agenda, DragAndDrop ,Resize} from '@syncfusion/ej2-react-schedule';


function Schedule(){


return (
<>
<ScheduleComponent  >
 <Inject services={[Day,Week,WorkWeek,Month,Agenda,DragAndDrop ,Resize]}/> 
 </ScheduleComponent>
<link href="https://cdn.syncfusion.com/ej2/material.css" rel="stylesheet" type="text/css" />
</>
);
}
    
export default Schedule;