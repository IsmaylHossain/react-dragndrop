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
      <div className=' w-7 text-center text-white mr-2   bg-cyan-500 rounded-full text-xl'><h1 >{id}</h1></div>
       <p>{title}</p>
    </div>
  )
}


export default Card

Card.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
 }