import PropTypes from 'prop-types';
import { useSortable } from '@dnd-kit/sortable'; 
import { CSS } from '@dnd-kit/utilities';
const Card = ({id,title}) => {
    const { attribute, listeners, setNodeRef, transform, transition} = useSortable({id});
    
    const style ={
        transition,
        transform: CSS.Transform.toString(transform),
    }
  return (
    <div ref={setNodeRef} {...attribute} {...listeners}
    style={style} className='bg-white shadow-black rounded-md w-full p-4 flex border-2 items-center justify-start touch-none '>
       <p>{title}</p>
    </div>
  )
}


export default Card

Card.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
 }