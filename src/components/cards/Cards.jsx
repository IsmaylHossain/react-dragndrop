import PropTypes from 'prop-types';
import Card from '../card/Card';

import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';


export const Cards = ({task}) => {
  return (
    <div className='bg-slate-200 border-0 rounded-md mx-auto p-4 w-8/12 max-w-xl flex flex-col gap-3'>
      <SortableContext items={task} strategy={verticalListSortingStrategy}>
        {
          task.map( (task) => (
            <Card id={task.id} title={task.title} key={task.id}></Card>

          ))
        }
      </SortableContext>
       
       
         
    </div>
  )
};

Cards.propTypes = {
   task: PropTypes.array,
}

 