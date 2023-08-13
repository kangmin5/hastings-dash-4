// import React, { useState } from 'react'
// import { useDrag, useDrop, DragObjectWithType } from 'react-dnd'

// type Item = {
//   id: string
//   text: string
// }

// type DragItem = DragObjectWithType & {
//   index: number
// }

// const Item: React.FC<{ item: Item; index: number; moveItem: (dragIndex: number, hoverIndex: number) => void }> = ({
//   item,
//   index,
//   moveItem
// }) => {
//   const [, dragRef] = useDrag<DragItem, unknown, unknown>({
//     item: { type: 'ITEM', id: item.id, index },
//     collect: monitor => ({
//       isDragging: monitor.isDragging()
//     })
//   })

//   const [, dropRef] = useDrop<DragItem, unknown, unknown>({
//     accept: 'ITEM',
//     hover: (item, monitor) => {
//       if (!dropRef.current) {
//         return
//       }
//       const dragIndex = item.index
//       const hoverIndex = index
//       if (dragIndex === hoverIndex) {
//         return
//       }
//       moveItem(dragIndex, hoverIndex)
//       item.index = hoverIndex
//     }
//   })

//   dragRef(dropRef)

//   return <div ref={dragRef}>{item.text}</div>
// }

// const MyComponent: React.FC = () => {
//   const [items, setItems] = useState<Item[]>([
//     { id: '1', text: 'Item 1' },
//     { id: '2', text: 'Item 2' },
//     { id: '3', text: 'Item 3' }
//   ])

//   const moveItem = (dragIndex: number, hoverIndex: number) => {
//     const draggedItem = items[dragIndex]
//     const updatedItems = [...items]
//     updatedItems.splice(dragIndex, 1)
//     updatedItems.splice(hoverIndex, 0, draggedItem)
//     setItems(updatedItems)
//   }

//   return (
//     <div>
//       {items.map((item, index) => (
//         <Item key={item.id} item={item} index={index} moveItem={moveItem} />
//       ))}
//     </div>
//   )
// }

// export default MyComponent
